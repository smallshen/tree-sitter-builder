#!/bin/bash

download_zig() {
    version="$1"
    url="https://ziglang.org/download/${version}/zig-linux-aarch64-${version}.tar.xz"

    wget "$url" -O "zig.tar.xz"
    tar -xf "zig.tar.xz"
}

download_zig "$1"

mv "zig-linux-aarch64-${version}" "zig"