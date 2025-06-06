import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { CLICommand } from "../state.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";


export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the names of 20 location areas in the Pokemon world",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Displays the names of the previous 20 location areas in the Pokemon world",
            callback: commandMapb
        },
        explore: {
            name: "explore",
            description: "Searches the specified area for pokemon",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Allows the player to attempt to catch a pokemon",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Shows the player details of a pokemon they have caught",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "Shows the player a list of all pokemon they have caught",
            callback: commandPokedex
        }
    };
}