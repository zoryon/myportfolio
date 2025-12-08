"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const Hero = () => {
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    // Total delay calculation for the description (Line 4 start delay + typewriter duration)
    const line4StartDelay = 3.5;
    const typewriterDuration = 2.0;
    const descriptionDelay = line4StartDelay + typewriterDuration; 

    return (
        <section className="h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-background">
            {/* Decorative Grid Line */}
            <div className="absolute top-0 left-20 w-[1px] h-full bg-border-subtle hidden md:block" />

            <div className="z-10 ml-0 md:ml-12">
                <div className="h-6 mb-4 relative"> 
                    {/* Line 1: // BOOT_COMPLETE */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ 
                            duration: 1.0,
                            times: [0, 0.1, 0.9, 1],
                            delay: 0.5 
                        }}
                        className="font-mono text-muted text-sm tracking-widest absolute" 
                    >
                        // BOOT_COMPLETE
                    </motion.p>

                    {/* Line 2: // ACCESS_GRANTED: GIOELE_SPATA */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ 
                            duration: 1.0,
                            times: [0, 0.1, 0.9, 1],
                            delay: 1.5 
                        }}
                        className="font-mono text-green-500 text-sm tracking-widest absolute"
                    >
                        // ACCESS_GRANTED: GIOELE_SPATA
                    </motion.p>
                    
                    {/* Line 3: // CMD: AWAITING_INPUT */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ 
                            duration: 1.0,
                            times: [0, 0.1, 0.9, 1],
                            delay: 2.5 
                        }}
                        className="font-mono text-amber-400 text-sm tracking-widest absolute"
                    >
                        // CMD: AWAITING_INPUT
                    </motion.p>
                    
                    {/* Line 4: // USER_PROFILE_LOADED: GIOELE_SPATA - Final persistent line with Typewriter */}
                    <motion.p
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "fit-content" }}
                        transition={{ 
                            delay: line4StartDelay,
                            duration: typewriterDuration, 
                            ease: "linear"
                        }}
                        onAnimationComplete={() => setIsTypingComplete(true)}
                        className={`font-mono text-muted text-sm tracking-widest absolute overflow-hidden whitespace-nowrap border-r-4 border-r-muted ${isTypingComplete ? "animate-cursor-blink" : ""}`}
                    >
                        // USER_PROFILE_LOADED: GIOELE_SPATA
                    </motion.p>
                </div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-[12vw] leading-[0.9] font-bold tracking-tighter text-primary mix-blend-difference"
                    >
                        SOFTWARE
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
                        className="text-[12vw] leading-[0.9] font-bold tracking-tighter text-zinc-600"
                    >
                        DEVELOPER
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: descriptionDelay, duration: 1 }}
                    className="mt-12 md:max-w-lg text-secondary text-lg leading-relaxed"
                >
                    <div>
                        <div>Junior Developer living in Florence.</div> 
                        <div>I like to build high performance software and websites.</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;