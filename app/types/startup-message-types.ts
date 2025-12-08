import { STARTUP_MESSAGE_TYPE } from "@/constants/startup-message-constants";

export type StartupMessageLine = {
    text: string;
    type: keyof typeof STARTUP_MESSAGE_TYPE;
    delay: number;
}
