function sum(accumulator , num){
    return accumulator + num;
}
let arr = [5,10,15,20];
let res = arr.reduce(sum,0);
console.log(res);