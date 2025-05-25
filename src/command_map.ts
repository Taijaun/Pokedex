import { stat } from "fs";
import { State } from "./state.js";

export async function commandMap(state: State) {

    const response = state.pokeapi.fetchLocations();
    const locations = await response;
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (let name of locations.results) {
        console.log(`${name.name}`);
    };
}