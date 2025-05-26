import { State } from "../state.js";

export async function commandExplore(state: State, area: string) {
    const response = state.pokeapi.fetchLocation(area);

    const location = await response;

    console.log(`Exploring ${area}...`);
    console.log("Found Pokemon:");

    for (let encounter of location.pokemon_encounters){
        console.log(`- ${encounter.pokemon.name}`);
    }

    

}