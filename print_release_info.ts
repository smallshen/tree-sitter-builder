import {build_info} from "./build_info.ts";


build_info.repositories.slice(1).forEach((r) => {
    const language = r
        .split("/")
        .findLast(() => true)!
        .split(".")[0]
        .split("-")
        .slice(2)
        .join("-")

    console.log(`- [${language}](${r})`)
})