//@ts-check
let Hashable = require('./Hashable.js');
const IntHash = require('./IntHash.js');
const StringHash = require('./StringHash.js');
class Dictionary {
    constructor(space) {
      this.table = new Array(space);
    }

    contains(k){
        let output = this.get(k);
        if(typeof output !== 'undefined')
            return true;
        return false;
    }

    get(k) {
        if(! (k instanceof Hashable))
            throw new Error("key must be of type Hashable");
        let index = k.hash % this.table.length;
        if(this.table[index] === undefined){
            this.table[index] = [];
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0].equals(k) == 0) {
                return this.table[index][i][1];
            }
        }

        return undefined;
    }

    put(key,value){
        if(! (key instanceof Hashable))
            throw new Error("key must be of type Hashable");
        if(typeof value === 'undefined')
            throw new Error("value must not be undefined");
        key.hashVal();
        const index = key.hash % this.table.length;
        if(!this.contains(key)){
            return this.table[index].push([key,value]);
        }
        else{
            for(let i = 0; i < this.table[index].length; i ++){
                if(this.table[index][i][0] === key){
                    this.table[index][i][1] = value;
                }
            }
        }
    }

    isEmpty(){
        return this.table.length !== 0;
    }
}

module.exports = Dictionary;