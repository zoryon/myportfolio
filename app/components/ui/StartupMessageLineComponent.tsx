import { motion } from "framer-motion";

import { StartupMessageLine } from "@/types/startup-message-types";
import { STARTUP_MESSAGE_TYPE } from "@/constants/startup-message-constants";
import { CHARACTERS } from "@/constants/character-constants";

const StartupMessageLineComponent = ({
    line,
    isFinal,
    typewriterDuration,
    onTypingComplete,
    isTypingComplete
}: {
    line: StartupMessageLine;
    isFinal: boolean;
    typewriterDuration?: number;
    onTypingComplete: () => void;
    isTypingComplete: boolean;
}) => {
    const prefix = STARTUP_MESSAGE_TYPE[line.type];

    if (!isFinal) {
        return (
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                    duration: 1.0,
                    times: [0, 0.1, 0.9, 1],
                    delay: line.delay
                }}
                className={`font-mono text-[10px] sm:text-sm tracking-widest absolute ${prefix.colorClass}`}
            >
                {prefix.text}{CHARACTERS.SPACE}{line.text}
            </motion.p>
        );
    }

    return (
        <motion.p
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "fit-content" }}
            transition={{
                delay: line.delay,
                duration: typewriterDuration,
                ease: "linear"
            }}
            onAnimationComplete={onTypingComplete}
            className={`
                font-mono text-[10px] sm:text-sm tracking-widest absolute overflow-hidden whitespace-nowrap border-r-4 border-r-muted 
                ${prefix.colorClass}
                ${isTypingComplete ? "animate-cursor-blink" : ""}
            `}
        >
            {prefix.text}{CHARACTERS.SPACE}{line.text}
        </motion.p>
    );
};

export default StartupMessageLineComponent;