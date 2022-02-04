// Graphs

class Graph {
  constructor(){
    this.adjacencyList = [];
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  } 

  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  dfsRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbour => {
        if(!visited[neighbour]) {
          return dfs(neighbour)
        }
      }) 
    })(start);
    return result;
  }

  dfsIterative(start){
     const result = [];
     const stack = [start];
     const visited = {};
     let currentVertex;
     visited[start] = true;
     while(stack.length){
       currentVertex = stack.pop();
       result.push(currentVertex);
       this.adjacencyList[currentVertex].forEach(v => {
        if(!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
       })
     }
     return result;
  }

  bfs(start){
    const result = [];
    const queue = [start];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(v => {
        if(!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      })
    }      
  return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
console.log('dfsRecursive',g.dfsRecursive('A'));
console.log('dfsIterative',g.dfsIterative('A'));
console.log('dfsIterative',g.bfs('A'));


// //            A
//             /   \
//           B      C
//          /        \ 
//         D   ---     E  
//           \       /
//               F  
