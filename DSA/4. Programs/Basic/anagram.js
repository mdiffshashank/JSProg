function isAnagram(str1,str2){
    const a = str1.split("").sort().join("").toLowerCase();
    const b = str2.split("").sort().join("").toLowerCase();
   return a===b;
}

//abcd - bcda