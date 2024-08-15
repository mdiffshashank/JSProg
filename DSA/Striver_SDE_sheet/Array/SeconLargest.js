function secondLargest(arr){
    let largest = -Infinity; //assign smallest number
    let secondLargest = -Infinity; //assign second smallest number

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest=arr[i];
        }else if(arr[i]<largest && arr[i]>=secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const result = secondLargest([4,6,9,3,6,2,7]);
console.log(result);


//same way we can write code for second smallest as well