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

int INF = 999999;
const int N = 3;
bool ready[N];
int value[N];
vi coins = {1, 3, 4};

int solve(int x) {
    if(x < 0) return INF;
    if(x == 0) return 0;
    if(ready[x]) return value[x];
    int best = INF;
    for(auto c : coins) {
        best = min(best, solve(x - c) + 1);
    }
    ready[x] = true;
    value[x] = best;
    return best;
}

int main() {

    return 0;
}