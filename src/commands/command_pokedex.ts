import { State } from "src/state.js";

export async function commandPokedex(state: State) {
    if (Object.keys(state.pokedex).length === 0) {
        console.log("Your Pokedex is empty!");
        return;
    }

    console.log("Your Pokedex:");

    for (const key in state.pokedex){
        console.log(`- ${key}`);
    };
}