"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { PROJECTS } from "@/constants/project-costants";
import SectionTitle from "@/components/ui/SectionTitle";

const ProjectList = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 w-full max-w-[1800px] mx-auto">
            <SectionTitle title="Selected Works" number="01" />

            <div className="flex flex-col w-full">
                {PROJECTS.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        hovered={hovered}
                        setHovered={setHovered}
                    />
                ))}
            </div>
        </section>
    );
}

type ProjectProps = {
    project: typeof PROJECTS[number];
    hovered: string | null;
    setHovered: React.Dispatch<React.SetStateAction<string | null>>;
}

const Project = ({ project, hovered, setHovered }: ProjectProps) => {
    const isHovered = hovered === project.id;
    const isDimmed = hovered !== null && !isHovered;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1030);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isDimmed ? 0.3 : 1 }}
            transition={{ duration: 0.4 }}
            {...(!isMobile ? {
                onHoverStart: () => setHovered(project.id),
                onHoverEnd: () => setHovered(null)
            } : {})}
            onClick={() => isMobile && setHovered(isHovered ? null : project.id)}
            className="group border-t border-border-subtle py-12 md:py-16 cursor-pointer relative transition-colors duration-500 hover:border-zinc-600"
        >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                <div className="flex items-baseline gap-8 md:gap-16">
                    <span className="text-muted font-mono text-sm tracking-widest">/{project.id}</span>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-foreground group-hover:translate-x-4 transition-transform duration-500 ease-out">
                        {project.name}
                    </h3>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-secondary font-mono text-xs uppercase tracking-widest">{project.category}</span>
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                        className="hidden md:flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mt-2"
                    >
                        Explore <ArrowUpRight size={14} />
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-8 md:pl-[calc(2rem+4ch)] max-w-3xl">
                            <p className="text-lg md:text-xl text-secondary leading-relaxed">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-6 mt-8">
                                {project.website && (
                                    <Link href={project.website} target="_blank" className="text-sm font-mono text-primary hover:text-white border-b border-transparent hover:border-white transition-colors pb-0.5">
                                        Live Website
                                    </Link>
                                )}
                                <Link href={project.clientRepository} target="_blank" className="text-sm font-mono text-primary hover:text-white border-b border-transparent hover:border-white transition-colors pb-0.5">
                                    Client Repo
                                </Link>
                                <Link href={project.serverRepository} target="_blank" className="text-sm font-mono text-primary hover:text-white border-b border-transparent hover:border-white transition-colors pb-0.5">
                                    Server Repo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ProjectList;