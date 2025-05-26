import { State } from "../state.js";

export async function commandMap(state: State) {
    let pageURL: string | undefined;

    if (state.nextLocationsURL === null){
        pageURL = undefined;
    } else {
        pageURL = state.nextLocationsURL;
    }

    const response = state.pokeapi.fetchLocations(pageURL)
    const locations = await response;
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (let name of locations.results) {
        console.log(`${name.name}`);
    };
}