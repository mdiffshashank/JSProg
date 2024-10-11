const unidirectionalPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(nodeA, nodeB, graph,new Set());
};

//helper functions 
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (src, dst, graph,visited) => {
  if (src === dst) return true;
  if(visited.has((src))) return false;
  
  visited.add(src);

  for (let neighbour of graph[src]) {
    if (hasPath(neighbour, dst, graph,visited)) {
      return true;
    }
  }
  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const result = unidirectionalPath(edges, "m", "j");
console.log(result);
