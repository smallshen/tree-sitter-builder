export type LanguageInfo = {
    name: string
    path: string
}

export type BuildInfo = {
    zigVersion: string
    targets: Target[]
    repositories: string[]
    languages: LanguageInfo[]
}

export enum Arch {
    aarch64 = "aarch64",
    arm64 = "arm64",
    arm = "arm",
    x86_64 = "x86_64"
}


export enum System {
    macos = "macos",
    linux = "linux",
    windows = "windows"
}

export enum ABI {
    gnu = "gnu",
    musl = "musl"
}

export type Target = {
    arch: Arch,
    system: System,
    abi: ABI | null
}

export function targetString(arch: Arch, system: System, abi: ABI | null = null): string {
    if (abi == null) return `${arch}-${system}`
    else return `${arch}-${system}-${abi}`
}

export function targetAsString(target: Target): string {
    return targetString(target.arch, target.system, target.abi)
}

function target(arch: Arch, system: System, abi: ABI | null = null): Target {
    return {
        arch,
        system,
        abi
    }
}


export const build_info: BuildInfo = {
    zigVersion: "0.11.0", // "https://ziglang.org/download/0.11.0/zig-linux-aarch64-0.11.0.tar.xz"
    targets: [
        // linux
        target(Arch.x86_64, System.linux),
        target(Arch.aarch64, System.linux),
        target(Arch.x86_64, System.linux, ABI.gnu),
        target(Arch.x86_64, System.linux, ABI.musl),
        target(Arch.aarch64, System.linux, ABI.gnu),
        target(Arch.aarch64, System.linux, ABI.musl),
        // macos
        target(Arch.aarch64, System.macos),
        target(Arch.x86_64, System.macos),
        // windows
        target(Arch.x86_64, System.windows),
        target(Arch.x86_64, System.windows, ABI.gnu),
        target(Arch.aarch64, System.windows),
        target(Arch.aarch64, System.windows, ABI.gnu),
    ],
    repositories: [
        "https://github.com/tree-sitter/tree-sitter.git",
        "https://github.com/amaanq/tree-sitter-capnp.git",
        "https://github.com/tree-sitter/tree-sitter-c.git",
        "https://github.com/tree-sitter/tree-sitter-cpp.git",
        "https://github.com/tree-sitter/tree-sitter-c-sharp.git",
        "https://github.com/sogaiu/tree-sitter-clojure.git",
        "https://github.com/uyha/tree-sitter-cmake.git",
        "https://github.com/tree-sitter/tree-sitter-css.git",
        "https://github.com/UserNobody14/tree-sitter-dart.git",
        "https://github.com/camdencheek/tree-sitter-dockerfile.git",
        "https://github.com/rydesun/tree-sitter-dot.git",
        "https://github.com/elixir-lang/tree-sitter-elixir",
        "https://github.com/WhatsApp/tree-sitter-erlang.git",
        "https://github.com/siraben/tree-sitter-formula",
        "https://github.com/stadelmanma/tree-sitter-fortran.git",
        "https://github.com/ObserverOfTime/tree-sitter-gitattributes.git",
        "https://github.com/shunsambongi/tree-sitter-gitignore.git",
        "https://github.com/theHamsta/tree-sitter-glsl.git",
        "https://github.com/tree-sitter/tree-sitter-go.git",
        "https://github.com/bkegley/tree-sitter-graphql.git",
        "https://github.com/tree-sitter/tree-sitter-haskell.git",
        "https://github.com/tree-sitter/tree-sitter-html.git",
        "https://github.com/tree-sitter/tree-sitter-java.git",
        "https://github.com/Joakker/tree-sitter-json5.git",
        "https://github.com/tree-sitter/tree-sitter-json.git",
        "https://github.com/tree-sitter/tree-sitter-julia.git",
        "https://github.com/fwcd/tree-sitter-kotlin.git",
        "https://github.com/latex-lsp/tree-sitter-latex.git",
        "https://github.com/Azganoth/tree-sitter-lua.git",
        "https://github.com/MDeiml/tree-sitter-markdown.git",
        "https://github.com/nix-community/tree-sitter-nix.git",
        "https://github.com/jiyee/tree-sitter-objc.git",
        "https://github.com/tree-sitter/tree-sitter-ocaml.git",
        "https://github.com/Isopod/tree-sitter-pascal.git",
        "https://github.com/tree-sitter/tree-sitter-php.git",
        "https://github.com/mitchellh/tree-sitter-proto.git",
        "https://github.com/tree-sitter/tree-sitter-python.git",
        "https://github.com/tree-sitter/tree-sitter-regex.git",
        "https://github.com/r-lib/tree-sitter-r.git",
        "https://github.com/tree-sitter/tree-sitter-ruby.git",
        "https://github.com/tree-sitter/tree-sitter-rust.git",
        "https://github.com/tree-sitter/tree-sitter-scala.git",
        "https://github.com/serenadeai/tree-sitter-scss.git",
        "https://github.com/AbstractMachinesLab/tree-sitter-sexp.git",
        "https://github.com/takegue/tree-sitter-sql-bigquery.git",
        "https://github.com/m-novikov/tree-sitter-sql.git",
        "https://github.com/dhcmrlchtdj/tree-sitter-sqlite.git",
        "https://github.com/Himujjal/tree-sitter-svelte.git",
        "https://github.com/ikatyang/tree-sitter-toml.git",
        "https://github.com/wasm-lsp/tree-sitter-wasm.git",
        "https://github.com/mehmetoguzderin/tree-sitter-wgsl.git",
        "https://github.com/maxxnino/tree-sitter-zig.git",
        "https://github.com/tree-sitter/tree-sitter-typescript.git"
    ],
    languages:
        [
            {
                "name": "capnp",
                "path": "tree-sitter-capnp"
            },
            {
                "name": "c",
                "path": "tree-sitter-c"
            },
            {
                "name": "cpp",
                "path": "tree-sitter-cpp"
            },
            {
                "name": "c-sharp",
                "path": "tree-sitter-c-sharp"
            },
            {
                "name": "clojure",
                "path": "tree-sitter-clojure"
            },
            {
                "name": "cmake",
                "path": "tree-sitter-cmake"
            },
            {
                "name": "css",
                "path": "tree-sitter-css"
            },
            {
                "name": "dart",
                "path": "tree-sitter-dart"
            },
            {
                "name": "dockerfile",
                "path": "tree-sitter-dockerfile"
            },
            {
                "name": "dot",
                "path": "tree-sitter-dot"
            },
            {
                "name": "elixir",
                "path": "tree-sitter-elixir"
            },
            {
                "name": "erlang",
                "path": "tree-sitter-erlang"
            },
            {
                "name": "formula",
                "path": "tree-sitter-formula"
            },
            {
                "name": "fortran",
                "path": "tree-sitter-fortran"
            },
            {
                "name": "gitattributes",
                "path": "tree-sitter-gitattributes"
            },
            {
                "name": "gitignore",
                "path": "tree-sitter-gitignore"
            },
            {
                "name": "glsl",
                "path": "tree-sitter-glsl"
            },
            {
                "name": "go",
                "path": "tree-sitter-go"
            },
            {
                "name": "graphql",
                "path": "tree-sitter-graphql"
            },
            {
                "name": "haskell",
                "path": "tree-sitter-haskell"
            },
            {
                "name": "html",
                "path": "tree-sitter-html"
            },
            {
                "name": "java",
                "path": "tree-sitter-java"
            },
            {
                "name": "json5",
                "path": "tree-sitter-json5"
            },
            {
                "name": "json",
                "path": "tree-sitter-json"
            },
            {
                "name": "julia",
                "path": "tree-sitter-julia"
            },
            {
                "name": "kotlin",
                "path": "tree-sitter-kotlin"
            },
            {
                "name": "latex",
                "path": "tree-sitter-latex"
            },
            {
                "name": "lua",
                "path": "tree-sitter-lua"
            },
            {
                "name": "markdown",
                "path": "tree-sitter-markdown/tree-sitter-markdown"
            },
            {
                "name": "markdown-inline",
                "path": "tree-sitter-markdown/tree-sitter-markdown-inline"
            },
            {
                "name": "nix",
                "path": "tree-sitter-nix"
            },
            {
                "name": "objc",
                "path": "tree-sitter-objc"
            },
            {
                "name": "ocaml",
                "path": "tree-sitter-ocaml/ocaml"
            },
            {
                "name": "pascal",
                "path": "tree-sitter-pascal"
            },
            {
                "name": "php",
                "path": "tree-sitter-php"
            },
            {
                "name": "proto",
                "path": "tree-sitter-proto"
            },
            {
                "name": "python",
                "path": "tree-sitter-python"
            },
            {
                "name": "regex",
                "path": "tree-sitter-regex"
            },
            {
                "name": "r",
                "path": "tree-sitter-r"
            },
            {
                "name": "ruby",
                "path": "tree-sitter-ruby"
            },
            {
                "name": "rust",
                "path": "tree-sitter-rust"
            },
            {
                "name": "scala",
                "path": "tree-sitter-scala"
            },
            {
                "name": "scss",
                "path": "tree-sitter-scss"
            },
            {
                "name": "sexp",
                "path": "tree-sitter-sexp"
            },
            {
                "name": "sql-bigquery",
                "path": "tree-sitter-sql-bigquery"
            },
            {
                "name": "sql",
                "path": "tree-sitter-sql"
            },
            {
                "name": "sqlite",
                "path": "tree-sitter-sqlite"
            },
            {
                "name": "svelte",
                "path": "tree-sitter-svelte"
            },
            {
                "name": "toml",
                "path": "tree-sitter-toml"
            },
            {
                "name": "wat",
                "path": "tree-sitter-wasm/wat"
            },
            {
                "name": "wast",
                "path": "tree-sitter-wasm/wast"
            },
            {
                "name": "wgsl",
                "path": "tree-sitter-wgsl"
            },
            {
                "name": "zig",
                "path": "tree-sitter-zig"
            },
            {
                name: "typescript",
                path: "tree-sitter-typescript/typescript"
            },
            {
                name: "tsx",
                path: "tree-sitter-typescript/tsx"
            }
        ]
}