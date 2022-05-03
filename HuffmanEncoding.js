//@ts-check
let Tree = require('./HuffmanTree.js');
let fs = require('fs');
let Dictionary = require('./Dictionary');
let StringHash = require('./StringHash');

class HuffmanEncoding{
    constructor(input){
        this.enCode(input);
    }

    enCode(input){
        let inputFile = "./" + input;
        let contents = fs.readFileSync(inputFile, "utf-8");
        contents = contents.replace(/(\r\n|\n|\r)/gm, "");

        this.chars = contents.split("");
        this.totalChar = 0;

        this.huffmanForest = this.createCharDict();
        this.combinedTree = this.guForest(this.huffmanForest);

        this.combinedTree.traversal(this.combinedTree,'');
        for (const key of Object.keys(this.combinedTree._hash)) {
            fs.appendFileSync("./output.txt",key + ":" + this.combinedTree._hash[key] + " ");
        }
        fs.appendFileSync("./output.txt", '\n');
    }
    //create dictionary of how many times each char occur
    //then divide that in the function below to find percentage
    createCharDict(){
        let charDict = new Dictionary(64); // 64 is a good number, plus 26 uppercase letters, 26 lowercase and 10 numbers = 64 is the max space we need
        let uniqueChar = [];
        for(let i = 0; i < this.chars.length; i++){
            let key = new StringHash("");
            if(this.chars[i] == '\n'){
                key = new StringHash("\\n");
            }
            else key = new StringHash(this.chars[i]);
            charDict.put(key,~~charDict.get(key) + 1);
            if(!uniqueChar.includes(this.chars[i]))
                uniqueChar.push(this.chars[i]);
            this.totalChar++;
        }

        return this.createHuffmanForest(charDict,uniqueChar);
    }

    /* let charArr = {};
    for(let i = 0; i < chars.length; i++){
        charArr[chars[i]] = ~~charArr[chars[i]] + 1;
        totalChar++;
    }

    let huffmanForest = [];
    for(let char in charArr){
        let percentage = charArr[char]/totalChar;
        percentage = Math.round((percentage + Number.EPSILON) * 100) / 100
        let leafTree = new Tree(percentage,char);
        huffmanForest.push(leafTree);
    } */
    //the work around by implementing our own dictionary is just eh :/

    createHuffmanForest(charDict,uniqueChar){
        let huffmanForest = [];
        for(let i = 0; i < uniqueChar.length; i++){
            //since dictionary only accept Hashable values as key we have to create this
            let key = new StringHash(uniqueChar[i]);
            key.hashVal();
            let percentageOfOccurence = charDict.get(key)/this.totalChar;
            //round floating point num
            percentageOfOccurence = Math.round((percentageOfOccurence + Number.EPSILON) * 100) / 100
            let leafTree = new Tree(percentageOfOccurence,uniqueChar[i]);
            huffmanForest.push(leafTree);
        } 
        return huffmanForest;
    }
    //fun naming I thought of, please don't deduct mark
    //gu is an ancient ritual in china
    //merge all trees until 1 remains
    guForest(survivalOfTheFittest){
        while(survivalOfTheFittest.length !== 1){

            survivalOfTheFittest.sort((a,b) => {
                return a.compareTo(b);
            });
            //left branch is the one with smaller percentage
            let combinedTree = survivalOfTheFittest[0].merge(survivalOfTheFittest[1]);
            survivalOfTheFittest = survivalOfTheFittest.slice(2);
            survivalOfTheFittest.push(combinedTree);
        }
        return survivalOfTheFittest[0];
    }
}

let x = new HuffmanEncoding("txt.txt");