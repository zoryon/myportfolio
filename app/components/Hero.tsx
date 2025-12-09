"use client";

import { motion } from "framer-motion";

import StartupMessage from "@/components/ui/StartupMessage";
import { CHARACTERS } from "@/constants/character-constants";
import { DESCRIPTION, DESCRIPTION_START_DELAY, TYPEWRITER_DURATION, TITLE } from "@/constants/hero-constants";
import { STARTUP_MESSAGE_LINES } from "@/constants/startup-message-constants";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-background">
            
            {/* Background Gradient Spot */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <main className="z-10 w-full max-w-[1800px] mx-auto">
                <div className="mb-8 md:mb-12">
                    <StartupMessage lines={STARTUP_MESSAGE_LINES} typewriterDuration={TYPEWRITER_DURATION} />
                </div>

                <HeroTitle titleArray={TITLE.split(CHARACTERS.SPACE)} />

                <div className="flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24 gap-8">
                    <HeroDescription description={DESCRIPTION} delay={DESCRIPTION_START_DELAY} duration={1.5} />
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: DESCRIPTION_START_DELAY + 0.5, duration: 1 }}
                        className="hidden md:block"
                    >
                        <div className="w-px h-24 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
                    </motion.div>
                </div>
            </main>
        </section>
    );
}

const HeroTitle = ({ titleArray }: { titleArray: string[] }) => {
    return (
        <div className="flex flex-col">
            {titleArray.map((line, i) => (
                <div className="overflow-hidden" key={i}>
                    <motion.h1
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ 
                            duration: 1.2, 
                            delay: 0.2 + (0.1 * i), 
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                        className={`
                            text-[13vw] md:text-[11vw] leading-[0.85] font-bold tracking-tighter uppercase
                            ${i === 0 ? "text-foreground" : "text-zinc-800"}
                            hover:text-zinc-400 transition-colors duration-700
                        `}
                    >
                        {line}
                    </motion.h1>
                </div>
            ))}
        </div>
    );
}

const HeroDescription = ({ description, delay, duration }: { description: string; delay: number; duration: number }) => {
    const lines = description.split(CHARACTERS.DOT).map(line => line.trim()).filter(line => line.length > 0);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay, duration: duration }}
            className="max-w-md text-secondary text-sm md:text-base leading-relaxed font-mono"
        >
            {lines.map((line, i) => (
                <p key={i} className="mb-2">{line}{i < lines.length ? "." : ""}</p>
            ))}
        </motion.div>
    )
}

export default Hero;