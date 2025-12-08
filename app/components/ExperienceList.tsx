"use client";

import Link from "next/link";

const ExperienceList = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-zinc-950/50">
            <div className="ml-0 md:ml-12 flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-sm font-mono text-muted tracking-widest">// EXPERIENCE_LOG</h2>
                </div>

                <div className="md:w-2/3">
                    {/* Timeline Item 1 */}
                    <div className="border-l border-border pl-8 relative pb-20">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                        <span className="font-mono text-muted text-sm">08/2025 — 08/2025</span>
                        <h3 className="text-3xl font-bold text-primary mt-2">Freelance Web Developer</h3>
                        <Link href="https://www.remira.com/en/" className="text-secondary">* Informal Collaboration</Link>

                        <ul className="mt-6 text-secondary leading-relaxed">
                            <li>Development and customization of a showcase website for the company</li>
                            <li>Implementation of responsive graphic layout (Next.js)</li>
                            <li>Performance and SEO optimization through metadata and network payload analysis</li>
                        </ul>

                        <div className="flex gap-2 mt-6">
                            {['NextJS', 'TypeScript', 'TailwindCSS'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-zinc-300 font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="border-l border-border pl-8 relative pb-20">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                        <span className="font-mono text-muted text-sm">06/2024 — 07/2024</span>
                        <h3 className="text-3xl font-bold text-primary mt-2">Full Stack Developer</h3>
                        <h2 className="text-secondary mt-1">(School-to-Work Training)</h2>
                        <Link href="https://www.remira.com/en/" className="text-secondary">Remira Italia S.r.l.</Link>

                        <ul className="mt-6 text-secondary leading-relaxed">
                            <li>Full-stack web project development assigned as practical training under company supervision</li>
                            <li>Implementation of full-stack features using React, .NET, and MySQL</li>
                            <li>Use of collaboration and version-control tools (Git/GitHub)</li>
                        </ul>

                        <div className="flex gap-2 mt-6">
                            {['React', '.NET', 'TypeScript', 'Docker', 'MySQL'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-zinc-300 font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceList;