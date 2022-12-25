#include<iostream>
#include<vector>
#include<algorithm>
#include<stack>
#include<queue>

using namespace std;
typedef vector<int> vi;
typedef deque<int> di;
typedef stack<int> si;
typedef queue<int> qi;

const int N = 10;
vi adj[N];
bool visited[N];

// O(N + M), N is Node count, M is Edge count
void dfs(int s) {
    if(visited[s]) return;
    visited[s] = true;
    for(auto u : adj[s]) {
        dfs(u);
    }
}

qi q;
int distances[N];

// O(N + M)
void bfs(int x) {
    visited[x] = true;
    distances[x] = 0;
    q.push(x);
    while(!q.empty()) {
        int s = q.front();
        q.pop();
        for(auto u : adj[s]) {
            if(visited[u]) continue;
            visited[u] = true;
            distances[u] = distances[s] + 1;
            q.push(u);
        }
    }
}

int main() {

    return 0;
}