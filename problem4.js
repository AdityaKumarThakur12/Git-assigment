function even(num){
    return num%2==0;
}
function square(num){
    return num**2;
}
function sum(accu,num){
    return accu + num;
};
let arr = [1,2,3,4,5];
let res = arr.filter(even).map(square).reduce(sum,0);
console.log(res);