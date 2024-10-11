const bredthFirstPrint = (graph,source)=>{
    const queue = [source];

    while(queue.length>0){
        const current = queue.shift();
        console.log(current);
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
}


const graph = {
    a:["b","c"],
    b:["d"],
    c:["e"],
    d:["f"],
    e:[],
    f:[],
}

bredthFirstPrint(graph,"a");