// input = "aababcc"
// output = ['aa', 'aba', 'bab','cc']

function palindrom(str) {
    const ans = [];
  
    for (let i = 0; i < str.length; i++) {
      
      let left = i;
      let right = i;
  //oDD case 
      while (left >= 0 && right < str.length && str[left] === str[right]) {
          let s = str.slice(left, right + 1);
          if (s.length !== 1) {
            ans.push(s);
          }
          left--;
          right++;
      }
  
  //even case
      left = i;
      right = i+1;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
          let s = str.slice(left, right + 1);
          if (s.length !== 1) {
            ans.push(s);
          }
          left--;
          right++;
      }
    }
  
    return ans;
  }
  
  console.log(palindrom("aababcc"));
  