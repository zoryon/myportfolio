"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Magnetic from "@/components/ui/Magnetic";
import SectionTitle from "@/components/ui/SectionTitle";
import { SOCIAL_LINKS } from "@/constants/social-constants";

const ContactSection = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-between px-6 md:px-12 lg:px-24 py-32 bg-background relative overflow-hidden w-full max-w-[1800px] mx-auto">
            
            <div className="flex flex-col z-10">
                <SectionTitle title="Contact" number="03" />

                <div className="max-w-5xl mt-12">
                    <h3 className="text-[12vw] md:text-[9vw] leading-[0.85] font-bold text-zinc-800 tracking-tighter uppercase">
                        Let's work
                    </h3>
                    <h3 className="text-[12vw] md:text-[9vw] leading-[0.85] font-bold text-foreground tracking-tighter uppercase">
                        together.
                    </h3>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-end justify-between mt-24 md:mt-0 z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex gap-8 flex-wrap">
                        {SOCIAL_LINKS.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.url} 
                                target="_blank" 
                                className="text-secondary hover:text-white font-mono text-sm uppercase tracking-widest transition-colors border-b border-transparent hover:border-white pb-1"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link 
                        href="mailto:gioelespata@gmail.com"
                        className="text-2xl md:text-3xl text-foreground hover:text-zinc-400 transition-colors font-light tracking-tight"
                    >
                        gioelespata@gmail.com
                    </Link>
                </div>

                <div className="mt-12 md:mt-0">
                    <Magnetic>
                        <Link
                            href="mailto:gioelespata@gmail.com"
                            className="group relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-white text-black flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110"
                        >
                            <div className="relative z-10 flex flex-col items-center gap-1">
                                <span className="text-xs md:text-sm font-mono tracking-widest uppercase font-bold">Email Me</span>
                                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                            </div>
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;