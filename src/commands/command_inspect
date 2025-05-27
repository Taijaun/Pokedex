import { State } from "../state.js"

export async function commandInspect(state: State, name: string) {

    if (!state.pokedex[name]){
        console.log("you have not caught that pokemon");
        return;
    }

    const inspectedPokemon = state.pokedex[name];

    console.log(`Name: ${name}`);
    console.log(`Height: ${inspectedPokemon.height}`);
    console.log(`Weight: ${inspectedPokemon.weight}`);
    console.log("Stats:")
    for (const stat of inspectedPokemon.stats){
        console.log(`-${stat.stat.name}: ${stat.base_stat}`);
    }

    console.log("Types:")

    for (const type of inspectedPokemon.types){
        console.log(`- ${type.type.name}`);
    }

}