class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const index = this._hash(key);

    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const value = this.keyMap[index];

    if(value) {
      for(let i = 0; i < value.length; i++) {
        if(value[i][0] === key) {
          return value[i][1];
        }
      }
    }

    return undefined;
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }
}