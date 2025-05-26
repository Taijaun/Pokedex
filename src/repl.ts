import * as readline from 'readline';
import { getCommands } from './commands/commands.js';
import { State } from './state.js';


export function cleanInput(input: string): string[] {
    const stringArray = input.trim().split(/\s+/);

    return stringArray;
}

export async function startREPL(state: State) {

    state.cli.prompt
    state.cli.on('line', async (input) => {
        const inputArray = cleanInput(input);
        

        if (inputArray.length === 0) {
            state.cli.prompt();
        } else {
            if (inputArray[0] in state.commands) {
                try {
                await state.commands[inputArray[0]].callback(state, ...inputArray.slice(1));
                } catch (err) {
                    if (err instanceof Error) {
                        console.error("An error occured:", err.message);
                    } else {
                        console.error("An unknown error occured:", err);
                    }
                    
                }
            }
            state.cli.prompt();
        }


    });

}