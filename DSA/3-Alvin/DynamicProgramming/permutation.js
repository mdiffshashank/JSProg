//Permutations of a string
//Get all permutations of a string

function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length);

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

let permutations = permut('xyz');