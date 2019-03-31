class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.keyMap[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const bucket = this.keyMap[i];

      if (bucket) {
        for (let j = 0; j < item.length; j++) {
          if (!result.includes(bucket[j][0])) {
            result.push(bucket[j][0]);
          }
        }
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const bucket = this.keyMap[i];

      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          if (!result.includes(bucket[j][1])) {
            result.push(bucket[j][1]);
          }
        }
      }
    }

    return result;
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }
}
