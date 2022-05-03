class Hashable{
    constructor(){
        if(this.constructor === Hashable) {
            throw new Error("Object of class Hashable cannot be created");
        }
        else{
        this._hashValue = 0;
        }
    }

    hashVal(){
        throw new Error("hashVal is not implemented in child class");
    }

    equals(x){
        throw new Error("equals is not implemented in child class");
    }

    get value(){
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

module.exports = Hashable;