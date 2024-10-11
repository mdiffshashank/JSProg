//1- Reverse a given string using recurrsion
function reverseR (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

//3- Reverse a string without native methods
function reverse(str){
    var rtnStr = [];
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    //reverse loop 
    for(var i = str.length-1; i>=0;i--){
      rtnStr.push(str[i]);
    }
    return rtnStr.join('');
  }


console.log(reverse("shashank"));