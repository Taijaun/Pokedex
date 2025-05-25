import { createInterface, type Interface } from "readline";
import * as readline from 'readline';
import { getCommands } from "./commands.js";


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    commands: Record<string, CLICommand>;
    cli: Interface
}

export function initState(): State {
    const rl: readline.Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const commandRegistry = getCommands();

    return {
        commands: commandRegistry,
        cli: rl,
    }
}