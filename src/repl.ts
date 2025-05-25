import * as readline from 'readline';
import { getCommands, CLICommand} from './commands.js';


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
        const commandRegistry = getCommands();

        if (inputArray.length === 0) {
            rl.prompt();
        } else {
            if (input in commandRegistry) {
                commandRegistry[input].callback(commandRegistry)
            }
            rl.prompt();
        }


    });

}