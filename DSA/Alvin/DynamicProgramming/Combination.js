
/**Find all the combinations of the elements */

function combinations(elements){
    if(elements.length===0) return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1);

    const combsWithoutFirst = combinations(rest);
    const combsWithFirst =[];

    combsWithoutFirst.forEach((comb)=>{
        const combWithFirst = [...comb,firstEl];
        combsWithFirst.push(combWithFirst);
    });

    return [...combsWithFirst,...combsWithoutFirst];
}

console.log(combinations(["a","b","c"]));

/**
 * Output = [
 *   [],
 *   [a],
 *   [b],
 *   [c],
 *   [a,b],
 *   [b,c],
 *   [c,a],
 *   [a,b,c]
 * ]
 */