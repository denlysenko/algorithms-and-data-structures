class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex].pop());
    }

    delete this.adjacencyList[vertex];
  }

  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const dfs = vertex => {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach(node => {
        if (!visited[node]) {
          return dfs(node);
        }
      });
    };

    dfs(start);

    return result;
  }

  DFSIterative(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(node => {
        if (!visited[node]) {
          visited[node] = true;
          stack.push(node);
        }
      });
    }

    return result;
  }

  BFS(start) {
    const result = [];
    const visited = {};
    const queue = [start];
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(node => {
        if (!visited[node]) {
          visited[node] = true;
          queue.push(node);
        }
      });
    }

    return result;
  }
}
