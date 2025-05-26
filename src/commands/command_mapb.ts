import { State } from "../state.js";

export async function commandMapb(state: State) {
    let pageURL: string | undefined;

    if (state.prevLocationsURL === null){
        console.log("you're on the first page");
        return
    } else {
        pageURL = state.prevLocationsURL;
    }

    const response = state.pokeapi.fetchLocations(pageURL)
    const locations = await response;
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (let name of locations.results) {
        console.log(`${name.name}`);
    };
}