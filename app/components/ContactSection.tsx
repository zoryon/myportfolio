"use client";

import { ArrowUpRight } from "lucide-react";

import Magnetic from "./ui/Magnetic";
import GradientSeparator from "./ui/GradientSeparator";
import HoverFillEffect from "./ui/HoverFillEffect";
import Link from "next/link";

const ContactSection = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-between px-6 md:px-20 py-24 bg-background relative overflow-hidden">
            <GradientSeparator />

            <div className="flex flex-col ml-0 md:ml-12 z-10">
                <h2 className="text-sm font-mono text-muted tracking-widest mb-6">// INITIALIZE_UPLINK</h2>

                <div className="max-w-4xl">
                    <h3 className="text-[10vw] md:text-[7vw] leading-[0.9] font-bold text-zinc-300 tracking-tighter">
                        INTERESTED?
                    </h3>
                    <h3 className="text-[10vw] md:text-[7vw] leading-[0.9] font-bold text-zinc-600 tracking-tighter">
                        REACH OUT.
                    </h3>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-end justify-between ml-0 md:ml-12 mt-20 md:mt-0 z-10">
                <Magnetic>
                    <Link
                        href="mailto:gioelespata@gmail.com"
                        target="_blank"
                        className="group relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-surface text-primary flex items-center justify-center overflow-hidden border border-border transition-colors duration-300 hover:border-zinc-600"
                    >
                        <HoverFillEffect />

                        <div className="relative z-10 flex flex-col items-center gap-2 group-hover:text-background transition-colors duration-300">
                            <span className="text-sm md:text-lg font-mono tracking-widest">GET IN TOUCH</span>
                            <ArrowUpRight size={24} />
                        </div>
                    </Link>
                </Magnetic>

                {/* Social Links */}
                <div className="flex gap-8 mt-12 md:mt-0 mb-8 md:mb-4">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((item) => (
                        <Link key={item} href="#" target="_blank" className="text-muted hover:text-primary font-mono text-sm uppercase tracking-widest transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContactSection;