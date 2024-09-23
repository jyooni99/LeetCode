
class ProductOfNumbers{
    constructor(){
        this.arr = [];
    }

    add(num){
        this.arr.push(num);
    }

    getProduct(n){
        let arr = this.arr.slice(this.arr.length - n);
        return arr.reduce((acc, num) => acc *= num, 1);
    }
};
