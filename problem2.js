function even(num){
    return num%2==0;
}
let arr = [1,2,3,4,5,6];
let res = arr.filter(even);
console.log(res);