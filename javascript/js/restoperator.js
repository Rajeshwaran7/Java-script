let ar = (...a)=> {
    let sum  = 0 ;
    for (const iterator of a) {
        sum += iterator;
    }
    return sum;
};

console.log(ar(2,34,5,6,5))