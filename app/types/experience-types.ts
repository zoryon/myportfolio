export type Experience = {
    startDate: Date,
    endDate: Date | null,
    role: string,
    company?: string,
    link?: string,
    additionalInfo?: string,
    description: string[],
    tags: string[], 
}