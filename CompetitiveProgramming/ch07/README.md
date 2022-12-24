# 그래프 기본

## 그래프 용어

Graph는 Node, Vertex, Edge로 구성되어 있다.
Path는 한 Node에서 Graph의 Edge를 지나 다른 Node까지 가는 길을 의미한다.

Connected Graph는 모든 노드 간에 경로가 있는 경우이다.
Component는 Graph의 연결된 부분이다.
Tree는 사이클이 없는 Connected Graph를 말한다.
Directed Graph는 Edge의 한 방향으로만 이동할 수 있다.
Weighted Graph는 Edge마다 weight가 존재한다.
Neighbor와 Adjacent는 두 Node가 Edge로 이어져있을 때를 의미한다.
Degree는 이웃 노드의 개수이다.
Regular Graph는 모든 Degree가 같은 경우이다.
Complete Graph는 모든 Node의 Degree가 N-1일 경우, 즉 모든 Node간에 간선이 있을 경우를 말한다.
Indegree는 Directed Graph에서 그 Node로 향하는 Edge의 개수이고
Outdegree는 그 Node에서 시작하는 Edge의 개수이다.

## 그래프의 표현

인접 리스트(Adjacency list) 표현법은 Graph의 각 Node x에 대한 Adjacency List, 즉 x에서 출발하는 Edge가 있는 Node의 리스트를 관리한다.

```cpp
    // Directing Graph
    vector<int> adj[N];
    adj[1].push_back(2);
    adj[2].push_back(3);
    adj[2].push_back(4);
    adj[3].push_back(4);
    adj[4].push_back(1);

    // Weight Graph
    vector<pair<int,int>> adj[N];
    adj[1].push_back({2, 5});
    adj[2].push_back({3, 7});
    adj[2].push_back({4, 6});
    adj[3].push_back({4, 5});
    adj[4].push_back({1, 2});

    for(auto u: ajd[s]) {
        //processing node u;
    }
```

인접 행렬(Adjacency matrix)은 Graph에 포함된 Edge를 나타내는 행렬이다.
<code>int adj[N][n];</code>
|0 1 0 0|
|0 0 1 1|
|0 0 0 1|
|1 0 0 0|

간선 리스트(Edge List)는 Graph의 모든 Edge를 특정한 순서에 따라 저장한 리스트이다.
모든 간선을 살펴볼 때, 특정한 노드에서 출발하는 간선을 알 필요가 없을 때 사용한다.

```cpp
vector<pair<int,int>> edges;

edges.push_back({1, 2});
edges.push_back({2, 3});
edges.push_back({2, 4});
edges.push_back({3, 4});
edges.push_back({4, 1});

// Weight Graph
vector<tuple<int, int, int>> edges;
edges.push_back({1, 2, 5});
```
