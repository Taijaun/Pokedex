import { getCommands } from "./commands.js";

export function commandHelp(){
    const commandRegistry = getCommands();

    console.log("Welcome to the Pokedex!")
    console.log("Usage:")
    console.log("")
    for (let command of Object.values(commandRegistry)) {
        console.log(`${command.name}: ${command.description}`)
    }
}