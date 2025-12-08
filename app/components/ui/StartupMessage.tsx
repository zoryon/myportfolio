import { useState } from "react";

import { StartupMessageLine } from "@/types/startup-message-types";
import StartupMessageLineComponent from "./StartupMessageLineComponent";

type StartupMessageProps = {
    lines: readonly StartupMessageLine[];
    typewriterDuration?: number;
};

const StartupMessage = ({
    lines,
    typewriterDuration = 2.0
}: StartupMessageProps) => {
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    return (
        <div className="h-6 mb-4 relative">
            {lines.map((line, index) => {
                const isFinal = index === lines.length - 1;

                return (
                    <StartupMessageLineComponent
                        key={index}
                        line={line}
                        isFinal={isFinal}
                        typewriterDuration={typewriterDuration}
                        onTypingComplete={() => setIsTypingComplete(true)}
                        isTypingComplete={isTypingComplete}
                    />
                );
            })}
        </div>
    );
};

export default StartupMessage;
