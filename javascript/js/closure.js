// calling the function inside another function

function outer(a) {

    let b= 10
       function inner() {
            return a*b
        }
    
    return inner;
}
let closure  = outer(10);
let closure2  = outer(2);

console.log(closure())
console.log(closure2())
console.log(closure())

