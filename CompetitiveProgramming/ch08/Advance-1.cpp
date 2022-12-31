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

int hamming(int a, int b) {
    return __builtin_popcount(a ^ b);
}

int main() {
    cout << "7, 13의 해밍거리: " << hamming(7, 13) << "\n";
    
    return 0;
}