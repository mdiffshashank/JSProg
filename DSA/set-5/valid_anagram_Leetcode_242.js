var isAnagram = function(s, t) {
    s= s.toLowerCase();
    t= t.toLowerCase();
    if(s.length !== t.length) return false;
    return  s.split("").sort().join(",") ==  t.split("").sort().join(",")
 };

const result = isAnagram("shashank","kanhssha")
console.log(result);

