// Spread Operator
let arr1 = [1,2,3,4];
let arr2 = [5,7,8];
let res = [...arr1,...arr2]
console.log(res);



// Rest Operator 
function add(...num){
    return num.reduce((acc,curr)=>acc+curr,0)
}
console.log(add(1,2,3,4,5));
