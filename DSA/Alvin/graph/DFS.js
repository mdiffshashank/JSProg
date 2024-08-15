
const depthFirstPrint = (graph,source)=>{
    const stack =[source];

    while(stack.length>0){
        let current = stack.pop();
        console.log(current);

        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
}
/**
 *  Recurrsive version ues call stack
 */
const depthFirstPrintR = (graph,source)=>{
    console.log(source);
    for(let neighour of graph[source]){
        depthFirstPrintR(graph,neighour)
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

// depthFirstPrint(graph,"a");
depthFirstPrintR(graph,"a");