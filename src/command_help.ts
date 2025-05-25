import { getCommands } from "./commands.js";

export function commandHelp(){
    const commandRegistry = getCommands();

    for (let command of Object.values(commandRegistry)) {
        console.log(`${command.name}: ${command.description}`)
    }
}