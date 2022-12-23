# algorithm

# setting default snippet

1. ctrl + shift + p
2. Configure User Snippets
3. select cpp.json
4. copy and writing this code

```JSON
{
  "cpp snippet": {
    "prefix": ">algorithm",
    "body": [
      "#include<iostream>",
      "#include<vector>",
      "#include<algorithm>",
      "#include<stack>",
      "#include<queue>",
      "",
      "using namespace std;",
      "typedef vector<int> vi;",
      "typedef deque<int> di;",
      "typedef stack<int> si;",
      "typedef queue<int> qi;",
      "",
      "int main() {",
      "",
      "    return 0;",
      "}"
    ],
    "description": "Log output to console"
  }
}

```
