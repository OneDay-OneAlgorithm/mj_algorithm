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

bool prime(int n) {
    if(n < 2) return false;
    for (int x = 2; x * x <= n; x++) {
        if(n % x == 0) return false;
    }
    return true;
}

vi factor(int n) {
    vi f;
    for (int x = 2; x * x <= n; x++) {
        while(n % x == 0) {
            f.push_back(x);
            n /= x;
        }
    }
    if(n > 1) f.push_back(n);
    return f;
}

int main() {

    return 0;
}