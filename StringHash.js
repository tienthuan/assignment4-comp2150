let Hashable = require('./Hashable.js');
class StringHash extends Hashable{
    #data;
    constructor(input){
        super();
        if(typeof input !== 'string')
            throw new Error("StringHash must be initialized with a string");
        this.data = input;

    }

    hashVal(){
        let prime = 13;
        let length = this._data.length;
        for(let i = 0; i < length; i ++){
            this._hashValue += this._data.charCodeAt(i)*Math.pow(prime,length - i + 1);
        }
    }

    equals(x){
        if(this.hashValue > x){
            return 1;
        }
        else if(this.hashValue < x){
            return -1;
        }
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

module.exports = StringHash;