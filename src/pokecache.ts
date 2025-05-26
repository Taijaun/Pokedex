export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number){
        this.#interval = interval
    }

    add<T>(key: string, val: T){
        const newEntry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val,
        }
        this.#cache.set(key, newEntry);
    }

    get<T>(key: string) {
        if (!this.#cache.has(key)){
            return undefined;
        }

        return this.#cache.get(key)?.val;
    }

    #reap() {
        for (const [key, entry] of this.#cache){
            if (entry.createdAt < (Date.now() - this.#interval)){
                this.#cache.delete(key);
            }
        }
    }

}