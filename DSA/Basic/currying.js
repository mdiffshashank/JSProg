/**create a function add which cover all the cases below
 * 
 * add(4)(5) //9
 * add(5)(7)(3) //15
 * add(2)(5,3) //10
 * 
 */

function add(a){
    return function(...b){
        if(Array.isArray(b)){
            return a+b.reduce((a,e)=>a+e)
        }else{
            return a+b;
        }
        // return function(c){
        //     return a+b+c;
        // }
    }
}

// const result1 = add(5)(7)(3);
const result1 = add(4)(5);
const result2 = add(5)(7)(3);
const result3 = add(2)(5,3);
console.log(result1);
console.log(result3);

// function add(a) {
//   function sum(b) {
//     a = a + b;
//     return sum;
//   }
//   sum.toString = function () {
//     return a;
//   };
//   return sum;
// }
// console.log(add(1)(2)(3)(4).toString());