//@ts-check
class Tree{
    constructor(weight, char, left, right) {  
        this._weight  =weight; // number of character occurrences  
        this._char  =char; // character to be encoded  
        this._left = left;  
        this._right = right;
        this._hash = {};  
    }

    get weight(){
        return this._weight;
    }

    get left(){
        return this._left;
    }

    get right(){
        return this._right;
    }

    get char(){
        return this._char;
    }

    merge(otherTree){
        let combinedWeight = this._weight + otherTree.weight;
        let combined = new Tree(combinedWeight,'',this,otherTree);
        return combined;
    }

    compareTo(otherTree){
        if(this.weight > otherTree.weight){
            return 1;
        }
        else if(otherTree.weight > this.weight){
            return -1;
        }
        else{
            if(this.right > otherTree.right){
                return 1;
            }

            if(this.right < otherTree.right){
                return -1;
            }

            else return 0;
        }
    }

    traversal(branch,code){
        if (!branch.left && !branch.right) return;   
        //Traverse to the left and add 0 to the path  
        if(branch.left){  
            if(branch.left.char !== '')
            this._hash[branch.left.char] = code + '0';
            this.traversal(branch.left, code + '0');  
        }  
        //Go right and add 1 to the path  
        if(branch._right){  
            if(branch.right.char !== '')
            this._hash[branch.right.char] = code + '1'; 
            this.traversal(branch.right, code + '1');  
        } 
    }
}

module.exports = Tree;