import {cmd} from "./cmd";


export async function mkdir(path: string) {
    await cmd(["mkdir", "-p", path])
}