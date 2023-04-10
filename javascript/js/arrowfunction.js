let test = (a,b)=> a+b;
console.log(test(1,2))

let test2 = (a,b,c)=> a+b+c;
console.log(test2(1,2,3))


let arr = [3,4,6,7,88,9,6];

let arrowSum = (arr) =>{
   let sum = 0;
    for (let a of arr) {
        sum += a;
    }
    return sum;
}
console.log(arrowSum(arr))