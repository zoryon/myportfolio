"use client";

import Link from "next/link";

import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERIENCES } from "@/constants/experience-constants";
import { Experience } from "@/types/experience-types";
import Date from "@/components/ui/Date";

const ExperienceList = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-zinc-950/50">
            <div className="ml-0 md:ml-12 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                    <SectionTitle title="EXPERIENCES_LOG" />
                </div>

                <main className="lg:w-2/3">
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
        <div className="border-l border-border pl-8 relative pb-20">
            {/* Timeline circle indicator */}
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

            <Date startDate={exp.startDate} endDate={exp.endDate} />

            <h3 className="text-3xl font-bold text-primary mt-2">{exp.role}</h3>
            <h2 className="text-secondary text-sm md:text-base">{exp.additionalInfo}</h2>
            <Link href={exp.link || "#"} className="text-secondary text-sm md:text-base">{exp.company || ""}</Link>

            {/* One List Item per object inside description (description is an array of Responsibilities and Tasks) */}
            <ul className="mt-6 text-secondary leading-relaxed">
                {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            {/* Tags representing skills or technologies used in the experience */}
            <div className="flex gap-2 mt-6 flex-wrap">
                {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-zinc-300 font-mono">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ExperienceList;