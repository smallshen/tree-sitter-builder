import {cmd} from "./cmd.ts";

export async function download_zig(version: string) {
    if (!(await Bun.file("zig/zig").exists())) {
        await cmd(["sh", "download_zig.sh", version])
    }
}