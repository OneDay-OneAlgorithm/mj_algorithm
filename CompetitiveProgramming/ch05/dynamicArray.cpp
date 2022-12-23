#include<iostream>
#include<vector>
#include<deque>
#include<stack>
#include<queue>
#include<algorithm>

using namespace std;
typedef vector<int> vi;
typedef deque<int> di;
typedef stack<int> si;
typedef queue<int> qi;

const int n = 10;
int array[n];

int main()
{
    vi v;
    v.push_back(3);
    cout << v[0] << "\n";
    vi v2 = {1, 2, 3, 4};
    for(auto x : v) {
        cout << x << "\n";
    }
    v.back();
    sort(v2.begin(), v2.end());
    reverse(v2.begin(), v2.end());
    random_shuffle(v2.begin(), v2.end());

    di d;
    d.push_back(5);
    return 0;
}