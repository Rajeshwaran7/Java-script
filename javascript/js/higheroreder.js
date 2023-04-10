function doTwice(a) {
    a();
    a();
  }
  
  function sayHello() {
    console.log("Hello!");
  }
  
  doTwice(sayHello); 
//**************** */


 function multiply(n)  {

    return function(x){
        return x*n;
    }

}

let double = multiply(2);
console.log(double(3));


let triple = multiply(4);
console.log(triple(3));



//**************** */
function mapArray(numbers,a) {

    const newAr = []
    for (const iterator of numbers) {
        newAr.push(a(iterator))
    }
    return newAr;
}


const numbers = [8,9,2,3,8,9]
const call  = mapArray(numbers,function(nums){
    return nums * 2;
})


console.log(call)
