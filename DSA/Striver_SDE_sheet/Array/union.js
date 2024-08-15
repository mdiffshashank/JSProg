function union(arr1,arr2){
    const union = Array.from(new Set([...arr1,...arr2]))
    return union;
}

console.log(union([1,2,3,4,5],[3,4,5,6,7]))

