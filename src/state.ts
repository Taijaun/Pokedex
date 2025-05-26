import { createInterface, type Interface } from "readline";
import * as readline from 'readline';
import { getCommands } from "./commands/commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    commands: Record<string, CLICommand>;
    cli: Interface;
    pokeapi: PokeAPI;
    prevLocationsURL: string | null;
    nextLocationsURL: string | null;
}

export function initState(): State {
    const rl: readline.Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const commandRegistry = getCommands();
    const cache = new Cache(20000)

    return {
        commands: commandRegistry,
        cli: rl,
        pokeapi: new PokeAPI(cache),
        prevLocationsURL: null,
        nextLocationsURL: null,
    }
}