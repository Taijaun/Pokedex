import * as readline from 'readline';


export function cleanInput(input: string): string[] {
    const stringArray = input.trim().split(/\s+/);

    return stringArray;
}

export function startREPL() {
    const rl: readline.Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    rl.prompt()
    rl.on('line', (input) => {
        const inputArray = cleanInput(input);

        if (inputArray.length === 0) {
            rl.prompt();
        } else {

        }
    });

}