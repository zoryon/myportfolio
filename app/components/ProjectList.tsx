"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { PROJECTS } from "@/constants/project-costants";
import SectionTitle from "@/components/ui/SectionTitle";

const ProjectList = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="min-h-screen py-24 px-6 md:px-20 border-t border-border-subtle">
            <div className="ml-0 md:ml-12">
                <SectionTitle title="PROJECTS_LOG" />

                <div className="flex flex-col">
                    {PROJECTS.map((project) => (
                        <Project
                            key={project.id}
                            project={project}
                            hovered={hovered}
                            setHovered={setHovered}
                        />
                    ))}
                </div>
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
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1030);
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    return (
        <motion.div
            key={project.id}
            initial={{ opacity: 0.5, x: 0 }}
            animate={{ 
                opacity: hovered === project.id ? 1 : 0.5, 
                x: hovered === project.id && isDesktop ? 20 : 0 
            }}
            onHoverStart={() => setHovered(project.id)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => setHovered(hovered === project.id ? null : project.id)}
            className="group border-b border-border-subtle py-16 cursor-pointer relative"
        >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between">
                <span className="text-zinc-600 font-mono text-xl mb-4 md:mb-0 mr-8">{project.id}</span>
                <h3 className={`text-5xl lg:text-7xl font-bold uppercase tracking-tight transition-colors duration-300 ${hovered === project.id ? "text-primary" : "group-hover:text-primary"}`}>
                    {project.name}
                </h3>
                <span className="hidden md:block text-muted font-mono text-sm ml-auto">{project.category}</span>
            </div>

            {/* Expansion Details */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: hovered === project.id ? "auto" : 0,
                    opacity: hovered === project.id ? 1 : 0
                }}
                className="overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <p className="mt-6 text-xl text-secondary max-w-2xl">{project.description}</p>
                <div className="flex flex-col items-start gap-2 mt-4 text-primary uppercase text-sm font-bold tracking-widest">
                    {project.website && (
                        <Link href={project.website} target="_blank" className="flex items-center gap-2">View Website <ArrowUpRight size={16} /></Link>
                    )}
                    <Link href={project.clientRepository} target="_blank" className="flex items-center gap-2">View Client Repository <ArrowUpRight size={16} /></Link>
                    <Link href={project.serverRepository} target="_blank" className="flex items-center gap-2">View Server Repository <ArrowUpRight size={16} /></Link>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectList;