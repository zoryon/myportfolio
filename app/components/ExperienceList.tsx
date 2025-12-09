"use client";

import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERIENCES } from "@/constants/experience-constants";
import { Experience } from "@/types/experience-types";
import Date from "@/components/ui/Date";

const ExperienceList = () => {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 w-full max-w-[1800px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                <div className="lg:w-1/4 lg:sticky lg:top-32 h-fit">
                    <SectionTitle title="Experience" number="02" />
                    <p className="hidden lg:block text-secondary text-sm leading-relaxed mt-8 max-w-xs">
                        A timeline of my professional journey and the roles I've held in the software development industry.
                    </p>
                </div>

                <main className="lg:w-3/4 flex flex-col gap-20">
                    {EXPERIENCES.map((exp, i) => (
                        <ExperienceComponent key={i} exp={exp} />
                    ))}
                </main>
            </div>
        </section>
    );
}

const ExperienceComponent = ({ exp }: { exp: Experience }) => {
    return (
        <div className="group relative pl-0 md:pl-8 border-l-0 md:border-l border-border-subtle hover:border-zinc-600 transition-colors duration-500">
            {/* Decorative dot for desktop */}
            <div className="hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 bg-background border border-zinc-600 rounded-full group-hover:bg-white group-hover:border-white transition-colors duration-500" />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{exp.role}</h3>
                <div className="mt-2 sm:mt-0">
                    <Date startDate={exp.startDate} endDate={exp.endDate} />
                </div>
            </div>

            <div className="flex flex-col gap-1 mb-6">
                <Link href={exp.link || "#"} className="text-lg text-white hover:underline w-fit">
                    {exp.company}
                </Link>
                <h2 className="text-secondary text-sm font-mono">{exp.additionalInfo}</h2>
            </div>

            <ul className="flex flex-col gap-3 text-secondary leading-relaxed mb-8">
                {exp.description.map((item, i) => (
                    <li key={i} className="list-none relative pl-6 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex gap-2 flex-wrap">
                {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface border border-border-subtle rounded-full text-xs text-zinc-400 font-mono uppercase tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ExperienceList;