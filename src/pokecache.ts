export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();

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

}