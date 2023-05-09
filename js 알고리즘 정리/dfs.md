# DFS 
## 구현코드 
``` js
const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];
const visited = new Array(graph.length).fill(false);

function dfs(graph, v, visited) {
    visited[v] = true;
    console.log(v);
    for(let node of graph[v]) {
        if(!visited[node])
        dfs(graph, node, visited);
    }
}

dfs(graph, 0, visited);
```
## 설명
DFS는 깊이 우선 탐색으로 그래프의 깊은 부분부터 탐색하는 알고리즘이다.
재귀와 스택을 사용하여 구현할 수 있다. 
1. 노드를 방문처리한다.
2. 방문한 노드의 인접노드가 방문하지 않은 노드이면 방문한다. 