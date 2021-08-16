import moment from "moment";

class Logger {
    private readonly threadName: string
    constructor(threadName: string) { this.threadName = threadName; }

    private print(escapeSq: string, level: string, msg: string): void {
        console.log(`${escapeSq}[${moment().format("HH:mm:ss")}] [ ${level} ] [ ${this.threadName.padEnd(16)} ] ${msg} \u001b[0m`);
    }

    pInfo(msg: string): void {
        this.print("\u001b[36m", "Info", msg);
    }

    pCaut(msg: string): void {
        this.print("\u001b[33m", "Caut", msg);
    }

    pWarn(msg: string): void {
        this.print("\u001b[35m", "Warn", msg);
    }

    pErr(msg: string): void {
        this.print("\u001b[31m", "Err!", msg);
    }
}

export default Logger;