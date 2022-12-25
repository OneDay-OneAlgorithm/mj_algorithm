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

int n, m;
long long node[501];
vector<pair<pair<int, int>, int>> edge;

// O(nm)
void Bellman() {
    node[1] = 0;
    for (int i = 1; i <= n - 1; i++)
    {
        for (int j = 0; j < edge.size(); j++)
        {
            int from, to, cost;
            from = edge[j].first.first;
            to = edge[j].first.second;
            cost = edge[j].second;

            if(node[from] == 999999999) continue;
            if(node[to] > node[from] + cost)
                node[to] = node[from] + cost;
        }
    }

    for (int i = 0; i < edge.size(); i++)
    {
        int from, to, cost;
            from = edge[i].first.first;
            to = edge[i].first.second;
            cost = edge[i].second;

        if(node[from] == 999999999) continue;
        if(node[to] > node[from] + cost) {
            cout << "-1\n";
            return;
        }
    }
}

const int N = 1000;
vector<pair<int, int>> nodes[N];
int dist[N];

void dijkstra(int start) {
    priority_queue<pair<int, int>> pq;

    pq.push({0, start});
    dist[start] = 0;

    while(!pq.empty()) {
        int cost = -pq.top().first;
        int here = pq.top().second;
        pq.pop();

        if(dist[here] < cost) continue;

        for (int i = 0; i < nodes[here].size(); i++)
        {
            int via_cost = cost + nodes[here][i].first;

            if(via_cost < dist[nodes[here][i].second]) {
                dist[nodes[here][i].second] = via_cost;
                pq.push({-via_cost, nodes[here][i].second});
            }
        }
    }
}

const int N = 1000;
const int INF = 9999999;
int table[N][N] = {
    {0, 5, 7, INF}, {4, 0, 12, 13}, {6, INF, 0, 20}, {INF, 9, 8, 0}};

void FloydFunction()
{
	for (int k = 0; k < N; k++) 
    {
		for (int i = 0; i < N; i++)
		{
			for (int j = 0; j < N; j++)
			{
 
				int temp = table[i][k] + table[k][j];
				if (temp < table[i][j])
					table[i][j] = temp;
 
			}
		}
	}
}
// 시간복잡도 V^3


int main()
{

    return 0;
}