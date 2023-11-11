import {build_info, LanguageInfo, System, type Target, targetAsString} from "./build_info";
import {mkdir} from "./mkdir";
import {cmd} from "./cmd.ts";
import {download_zig} from "./download_zig";
import {clone_repository} from "./clone_repository";

function getTargetSuffix(target: Target): string {
    if (target.system == System.linux) {
        return "so"
    } else if (target.system == System.macos) {
        return "dylib"
    } else if (target.system == System.windows) {
        return "dll"
    } else {
        throw new Error("unknown target")
    }
}


async function compileTarget(target: Target) {

    const command = [
        'zig',
        'cc',
        'tree-sitter/lib/src/lib.c',
        '-I',
        'tree-sitter/lib/src/',
        '-I',
        'tree-sitter/lib/include',
        target.system === System.macos ? "-dynamiclib" : "-shared",
        '-target',
        targetAsString(target),
        '-o',
        `./output/${targetAsString(target)}/libtree-sitter.${getTargetSuffix(target)}`,
        "-O3"
    ];

    await cmd(command)
}

async function compileLanguage(target: Target, language: LanguageInfo) {
    const scanner = `${language.path}/src/scanner.c`


    const command = [
        'zig',
        'cc',
        `${language.path}/src/parser.c`,
        '-I',
        `${language.path}/src/tree-sitter`,
        '-I',
        'tree-sitter/lib/include',
        target.system === System.macos ? "-dynamiclib" : "-shared",
        '-target',
        targetAsString(target),
        '-o',
        `./output/${targetAsString(target)}/libtree-sitter-${language.name}.${getTargetSuffix(target)}`,
        "-O3"
    ];

    if (await Bun.file(scanner).exists()) {
        command.push(scanner)
    }

    await cmd(command)
}


await Promise.all(build_info.repositories.map(u => clone_repository(u)))
await Promise.all(build_info.targets.map(t => mkdir(`output/${targetAsString(t)}`)))
await Promise.all(build_info.targets.map(t => compileTarget(t)))


await Promise.all(
    build_info.languages.flatMap((language) =>
        build_info.targets.map((target) => compileLanguage(target, language))
    )
)


await Promise.all(
    build_info.targets.map((target) => {
        return cmd(["tar", "-cJf", `./output/${targetAsString(target)}.tar.xz`, `./output/${targetAsString(target)}/`])
    })
)