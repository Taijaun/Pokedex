import { describe, expect, test } from "vitest";
import { Cache, CacheEntry } from "src/pokecache.js";


test("can add and retrieve an item", () => {
    const cache = new Cache(1000);
    const value = { val: "Hello world"}
    cache.add("beans", value)
    const result = cache.get("beans");

    expect(result).toBe(value);
});


