import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;

    constructor(cache: Cache) {
        this.cache = cache
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = ""
        if (!pageURL){
            url = `${PokeAPI.baseURL}/location-area`;
        } else {
            url = pageURL;
        }
        const cached = this.cache.get(url);

        if (cached){
            return cached;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ShallowLocations = await response.json();
        this.cache.add(url, data);
        return data

    }

    async fetchLocation(locationName: string): Promise<Location> {
        const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = this.cache.get(locationURL);

        if (cached){
            return cached;
        }

        const response = await fetch(locationURL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Location = await response.json();
        this.cache.add(locationURL, data)
        return data
    }

    
}

    export type NameUrl = { name: string; url: string;}
    
    export type ShallowLocations = {
        next: string | null;
        previous: string | null;
        results: NameUrl[];
    };

    

    export type Location = {
        encounter_method_rates: EncounterMethodRate[]
        game_index: number
        id: number
        location: NameUrl
        name: string
        names: Name[]
        pokemon_encounters: PokemonEncounter[]
    };

    // MARK - : location types

    export interface EncounterMethodRate {
        encounter_method: EncounterMethod
        version_details: VersionDetail[]
    }

    export interface EncounterMethod {
        name: string
        url: string
    }

    export interface VersionDetail {
        rate: number
        version: Version
    }

    export interface Version {
        name: string
        url: string
    }

    export interface Name {
        language: Language
        name: string
    }

    export interface Language {
        name: string
        url: string
    }

    export interface PokemonEncounter {
        pokemon: Pokemon
        version_details: VersionDetail2[]
    }

    export interface Pokemon {
        name: string
        url: string
    }

    export interface VersionDetail2 {
        encounter_details: EncounterDetail[]
        max_chance: number
        version: Version2
    }

    export interface EncounterDetail {
        chance: number
        condition_values: ConditionValue[]
        max_level: number
        method: Method
        min_level: number
    }

    export interface ConditionValue {
        name: string
        url: string
    }

    export interface Method {
        name: string
        url: string
    }

    export interface Version2 {
        name: string
        url: string
    }
