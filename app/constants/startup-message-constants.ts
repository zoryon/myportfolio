import { StartupMessageLine } from "@/types/startup-message-types";
import { TYPEWRITER_DELAY } from "@/constants/hero-constants";

export const STARTUP_MESSAGE_LINES: readonly StartupMessageLine[] = [
    {
        text: "KERNEL_INIT",
        type: "SUCCESS",
        delay: 0.5
    },
    {
        text: "MODULE: /dev/hda1 UNMOUNTED",
        type: "ERROR",
        delay: 1.5
    },
    {
        text: "ATTEMPTING SAFE MODE RECOVERY",
        type: "WARNING",
        delay: 2.5
    },
    {
        text: "RECOVERY: GIOELE_SPATA ONLINE",
        type: "SUCCESS",
        delay: TYPEWRITER_DELAY
    }
] as const;

export const STARTUP_MESSAGE_TYPE = {
    SUCCESS: {
        text: "[ OK ]",
        colorClass: "text-green-500"
    },
    ERROR: {
        text: "[ FAILURE ]",
        colorClass: "text-red-500"
    },
    WARNING: {
        text: "[ WARNING ]",
        colorClass: "text-amber-400"
    }
} as const;