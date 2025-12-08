const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="mb-12">
            {/* Command Line Input */}
            <p className="text-sm font-mono text-gray-500 mb-2">
                <span className="text-green-400">gioelespata@dev-machine</span>:
                <span className="text-blue-400">~/dev/myportfolio/</span>
                $ cat {title.toLowerCase().replace(/\s/g, '-')}.md
            </p>
            
            {/* Section Title Output */}
            <h2 className="text-3xl font-mono text-white tracking-tight leading-relaxed">
                {title}
            </h2>
            
            {/* Simple Underline Indicator */}
            <div className="w-16 h-1 bg-foreground my-2"></div> 
        </div>
    );
}

export default SectionTitle;