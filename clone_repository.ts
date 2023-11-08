import {cmd} from "./cmd.ts";


export async function clone_repository(git: string) {
    await cmd(["git", "clone", "--depth=1", git])
}