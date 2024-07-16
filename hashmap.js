class HashMap {
  constructor(initialLoadFactor = 8) {
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
    this.loadFactor = initialLoadFactor;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    const modulus = 2 ** 32 - 1;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % modulus;
    }

    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key) % this.capacity;
    const entry = { key, value };
    if (this.buckets[index] === entry) return;
    this.buckets[index] = entry;
  }

  get(key) {
    const index = this.hash(key) % this.capacity;
    return this.buckets[index].value ?? null;
  }

  has(key) {
    return !!this.get(key);
  }

  remove(key) {
    const index = this.hash(key) % this.capacity;

    if (index >= 0 && index < this.buckets.length) {
      this.buckets.splice(index, 1);
    }
  }

  length() {
    return this.buckets.length;
  }

  clear() {
    this.buckets = [];
  }

  keys() {
    const keys = [];
    for (let item of this.buckets) {
      if (item !== undefined) keys.push(item.key);
    }

    return keys;
  }

  values() {
    const values = [];
    for (let item of this.buckets) {
      if (item !== undefined) values.push(item.value);
    }

    return values;
  }

  entries() {
    const entries = [];
    for (let item of this.buckets) {
      if (item !== undefined) entries.push([item.key, item.value]);
    }

    return entries;
  }
}

const test = new HashMap(); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
