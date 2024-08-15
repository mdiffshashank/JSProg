function LeftRotate(arr){
    return [...arr.slice(1),arr[0]];
}

const result = LeftRotate([1,2,3,4,5,6]);
console.log(result);