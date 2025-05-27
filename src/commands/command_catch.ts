import { State } from "../state.js"

export async function commandCatch(state: State, name: string){
    const response = state.pokeapi.fetchPokemonByName(name);

    const pokemon = await response;

    if (pokemon){
        console.log(`Throwing a Pokeball at ${name}...`);

        const catchChance = pokemon.base_experience / 500;
        const roll = Math.random();

        if (roll >= catchChance) {
            state.pokedex[name] = pokemon;
            console.log(`${name} was caught!`)
            console.log("You can now inspect it with the inspect command.")
        } else {
            console.log(`${name} escaped!`)
        }

    }
}