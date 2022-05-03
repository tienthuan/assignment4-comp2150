//@ts-check
let Hashable = require('./Hashable.js');
class IntHash extends Hashable{
    constructor(input){
        super();
        if(typeof input !== 'number')
            throw new Error("must initialize IntHash with a number");
        this._data = input;
    }

    hashVal(){
        this._hashValue = this._data;
    }

    equals(x){
        if(this.value > x)
            return 1;
        else if(this.value < x)
            return -1;
        else return 0;
    }

    get data(){
        return this._data;
    }

    get hash(){
        return this._hashValue;
    }

    set data(x){
        this._data = x;
    }

    set hash(x){
        this._hashValue = x
    }
}

module.exports = IntHash;