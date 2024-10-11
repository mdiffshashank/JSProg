/*
* DFS algo for has path using recursion
*/
//Program-1
const hasPath = (src,dst,graph)=>{
    if(src===dst) return true;
    for (let neighbour of graph[src]){
        if (hasPath(neighbour,dst,graph)){
            return true
        }
    }
    return false;
}
//Program-2
const hasPath_bfs = (src,dst,graph)=>{
    const queue = [src];
    while(queue.length>0){
        const current = queue.shift();
        if(current===dst) return true;
        for(let neighbour of graph[current]){
            queue.push(neighbour)
        }
    }
    return false;
}


//graph is acyclic
const graph = {
    f:["g","i"],
    g:["h"],
    h:[],
    i:["g","k"],
    j:["i"],
    k:[],
}

// const result = hasPath("j","f",graph)
// console.log(result);

const result = hasPath_bfs("f","k",graph)
console.log(result);