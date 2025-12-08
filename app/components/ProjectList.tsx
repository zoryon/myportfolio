"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "01",
        name: "NoxChess",
        category: "Open Source / Chess Website",
        description: "A high-performance web-based chess platform with real-time multiplayer and AI integration.",
        website: "https://noxchess.vercel.app",
        clientRepository: "https://github.com/zoryon/noxchess-client",
        serverRepository: "https://github.com/zoryon/noxchess-server"
    },
    {
        id: "02",
        name: "ZoraVault",
        category: "Open Source / Password Manager",
        description: "A secure, open-source password manager focused on simplicity and user privacy.",
        clientRepository: "https://github.com/zoryon/zoravault-client",
        serverRepository: "https://github.com/zoryon/zoravault-server"
    }
];

const ProjectList = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="min-h-screen py-24 px-6 md:px-20 border-t border-border-subtle">
            <div className="ml-0 md:ml-12">
                <h2 className="text-sm font-mono text-muted mb-10 tracking-widest">// PROJECT_LOG</h2>

                <div className="flex flex-col">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0.5 }}
                            whileHover={{ opacity: 1, x: 20 }}
                            onHoverStart={() => setHovered(project.id)}
                            onHoverEnd={() => setHovered(null)}
                            className="group border-b border-border-subtle py-16 cursor-pointer relative"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between">
                                <span className="text-zinc-600 font-mono text-xl mb-4 md:mb-0 mr-8">{project.id}</span>
                                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
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
                            >
                                <p className="mt-6 text-xl text-secondary max-w-2xl">{project.description}</p>
                                <div className="flex flex-col items-start gap-2 mt-4 text-primary uppercase text-sm font-bold tracking-widest">
                                    <Link href={project.clientRepository} target="_blank" className="flex items-center gap-2">View Client Repository <ArrowUpRight size={16} /></Link>
                                    <Link href={project.serverRepository} target="_blank" className="flex items-center gap-2">View Server Repository <ArrowUpRight size={16} /></Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectList;