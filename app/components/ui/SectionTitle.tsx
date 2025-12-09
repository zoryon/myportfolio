"use client";

const SectionTitle = ({ title, number }: { title: string, number?: string }) => {
    return (
        <div className="mb-16 flex items-baseline gap-4 overflow-hidden">
            {number && (
                <span className="font-mono text-xs text-muted tracking-widest">
                    ({number})
                </span>
            )}
            <h2 className="text-sm font-mono text-secondary tracking-[0.2em] uppercase">
                {title.replace(/_/g, ' ')}
            </h2>
            <div className="h-px bg-border-subtle grow ml-4 self-center" />
        </div>
    );
}

export default SectionTitle;