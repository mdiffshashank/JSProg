//constraint : array is sorted
//Remove duplicates from Sorted array

function removeDuplicate(arr){
    //Two pointer approach
    let i=0;
    let j=0;

    while(j<arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return arr.slice(0,i+1);
}

const result = removeDuplicate([1,1,2,2,2,3,3])
console.log(result);
