import { Experience } from "@/types/experience-types";

/**
 * EXPERIENCES array stores professional experiences.
 * Obj key "description": An array of strings, each representing a responsibility or task.
 * 
 * Note on the month parameter in Date:
 * - JavaScript Date constructor uses zero-based months (0 = January, 1 = February, ..., 11 = December).
 * - To represent the correct human-readable month, we subtract 1 from the intended month number.
 *   Example: 8 - 1 → September (8 is September, but for JS it is 7), 6 - 1 → July.
 */
export const EXPERIENCES: Experience[] = [
    {
        startDate: new Date(2025, 8 - 1),
        endDate: new Date(2025, 8 - 1),
        role: "Freelance Web Developer",
        company: "* Informal Collaboration",
        description: [ 
            "Development and customization of a showcase website for the company",
            "Implementation of responsive graphic layout (Next.js)",
            "Performance and SEO optimization through metadata and network payload analysis"
        ],
        tags: ["NextJS", "TypeScript", "TailwindCSS", "Git", "GitHub"]
    },
    {
        startDate: new Date(2024, 6 - 1),
        endDate: new Date(2024, 7 - 1),
        role: "Full Stack Developer",
        company: "Remira Italia S.r.l.",
        link: "https://www.remira.com/en/",
        additionalInfo: "(School-to-Work Training)",
        description: [
            "Full-stack web project development assigned as practical training under company supervision",
            "Implementation of full-stack features using React, .NET, and MySQL",
            "Use of collaboration and version-control tools (Git/GitHub)"
        ],
        tags: ["React", "TypeScript", ".NET", "MySQL", "Docker", "Git", "GitHub"]
    },
] as const;