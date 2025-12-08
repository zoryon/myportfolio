"use client";

import { motion } from "framer-motion";

import StartupMessage from "@/components/ui/StartupMessage";
import { CHARACTERS } from "@/constants/characters-constants";
import { DESCRIPTION, DESCRIPTION_START_DELAY, TYPEWRITER_DURATION, TITLE } from "@/constants/hero-constants";
import { STARTUP_MESSAGE_LINES } from "@/constants/startup-message-constants";

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-background">
            {/* Decorative Grid Line */}
            <div className="absolute top-0 left-20 w-px h-full bg-border-subtle hidden md:block" />

            <main className="z-10 ml-0 md:ml-12">
                <StartupMessage lines={STARTUP_MESSAGE_LINES} typewriterDuration={TYPEWRITER_DURATION} />

                <HeroTitle titleArray={TITLE.split(CHARACTERS.SPACE)} />

                <HeroDescription description={DESCRIPTION} delay={DESCRIPTION_START_DELAY} duration={1.5} />
            </main>
        </section>
    );
}

const HeroTitle = ({ titleArray }: { titleArray: string[] }) => {
    return (
        <>
            {titleArray.map((line, i) => (
                <div className="overflow-hidden" key={i}>
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 * i, ease: "circOut" }}
                        className={`
                            text-[12vw] leading-[0.9] font-bold tracking-tighter 
                            ${i === 0 ? "text-primary mix-blend-difference" : "text-zinc-600"}
                        `}
                    >
                        {line}
                    </motion.h1>
                </div>
            ))}
        </>
    );
}

const HeroDescription = ({ description, delay, duration }: { description: string; delay: number; duration: number }) => {
    const lines = description.split(CHARACTERS.DOT).map(line => line.trim()).filter(line => line.length > 0);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay, duration: duration }}
            className="mt-12 mr-1 md:max-w-lg text-secondary text-lg leading-relaxed"
        >
            <div>
                {lines.map((line, i) => {
                    return <div key={i}>{line}{i < lines.length ? CHARACTERS.DOT : ""}</div>;
                })}
            </div>
        </motion.div>
    )
}

export default Hero;