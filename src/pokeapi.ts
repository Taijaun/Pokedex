export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {

    }

    async fetchLocation(locationName: string): Promise<Location> {

    }

    
}

export type NameUrl = { name: string; url: string;}
    
    export type ShallowLocations = {
        next: string | null;
        previous: string | null;
        results: NameUrl[];
    };

    

    export type Location = {

    };