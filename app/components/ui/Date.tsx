import { CHARACTERS } from "@/constants/character-constants";

const Date = ({ startDate, endDate }: { startDate: Date, endDate: Date | null }) => {
    return (
        <span className="font-mono text-muted text-sm">
            {startDate.toLocaleDateString("it-IT", { year: "numeric", month: "numeric" })}
            {CHARACTERS.SPACE}{endDate ? "—" : ""}{CHARACTERS.SPACE}
            {endDate ? endDate.toLocaleDateString("it-IT", { year: "numeric", month: "numeric" }) : "Present"}
        </span>
    );
}

export default Date;