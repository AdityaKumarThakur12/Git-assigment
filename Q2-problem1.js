function forEachCustom(arr, callback){
    for(let i=0; i<arr.length; i++){
       callback(arr[i],i,arr);
    }
}
function fn(number,index,arr){
    console.log(`Element at index ${index}: ${number}`);
}
let arr = [1,2,3,4,5];
forEachCustom(arr, fn);