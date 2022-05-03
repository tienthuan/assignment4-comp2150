class Student{
    constructor(){
        this.x = 1;
        this.y = 0;
        this.z = 0;
    }
}
class TeenagePregnancy extends Student{
    constructor(){
        super();
        this.x = 2;
    }

    method(){
        let x = 3;
    }
}


let x = new TeenagePregnancy();
TeenagePregnancy.prototype.hello = function() {console.log("hello");}
console.log(x);
x.hello();
console.log(x instanceof Object);
//I'm not used to use strict because I use TS-check
class Software{
    constructor(){
        if(this.constructor === Software) {
            throw new Error("Object of class Softwarecannot be created");
        }
        else{
        this._name = "new software";
        this._size = 0;
        this._os = "windows";
        }
    }

    constructor(name,size,os){
        if(this.constructor === Software) {
            throw new Error("Object of class Softwarecannot be created");
        }
        else{
        this._name = name;
        this._size = size;
        this._os = os;
        }
    }

    increaseSize(amount){
        this._size += amount;
    }

    update(){
        throw new Error("cannot use Software's update");
    }
}

class TaxSoftWare extends Software{
    constructor(){
        super();
        this._province = "manitoba";
    }

    constructor(name,size,os,province){
        super(name,size,os);
        this._province = province;
    }

    update(){
        console.log("update in process...");
        super.increaseSize(125);
    }
}