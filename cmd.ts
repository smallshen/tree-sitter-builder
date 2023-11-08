

export async function cmd(commands: string[]) {
    
    return new Promise((resolve, reject) => {
        Bun.spawn(commands, {
            onExit(subprocess: Subprocess<In, Out, Err>, exitCode: number | null, signalCode: number | null, error?: Errorlike): void | Promise<void> {
                if (exitCode != 0) {
                    reject(error)
                } else {
                    resolve()
                }
            }
        })
    })
    
}