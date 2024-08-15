//normal function
function fib(num){
    if(num<2) return num;
    return fib(num-1) + fib(num-2);
}

//memoization logic
function memoize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }else{
            const result = fn.apply(this,args);
            cache[args] = result;
            return result;
        }
    }
}

//new memoized function
const fibonacci = memoize(fib);

console.log(fibonacci(50));