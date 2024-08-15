function numberPalindrom(n){
    let num = n; // copy a number
    let reverseNum = ""; //

    while(num>0){
        let r = num%10;
        num = parseInt(num/10);
        reverseNum = reverseNum + r;
    }
    if(n==reverseNum)return true; //Don't use === here one is string and other is number
    return false;
}

console.log(numberPalindrom(121));
