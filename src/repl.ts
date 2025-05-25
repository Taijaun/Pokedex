import * as readline from 'readline';
import { getCommands } from './commands.js';
import { State } from './state.js';


export function cleanInput(input: string): string[] {
    const stringArray = input.trim().split(/\s+/);

    return stringArray;
}

export function startREPL(state: State) {

    state.cli.prompt
    state.cli.on('line', (input) => {
        const inputArray = cleanInput(input);
        

        if (inputArray.length === 0) {
            state.cli.prompt();
        } else {
            if (input in state.commands) {
                state.commands[input].callback(state)
            }
            state.cli.prompt();
        }


    });

}