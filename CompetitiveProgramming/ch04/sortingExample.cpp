#include<iostream>
#include<vector>
#include <algorithm>

using namespace std;
typedef vector<int> vi;

int main() {
    
    return 0;
}

// Indiscriminate algorithm
bool checkOnlyElement(int arr[], int size) {
    bool ok = true;
    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if(arr[i] == arr[j])
                ok = false;
        }
    }
    return ok;
}

// O(n log n)
bool ONlogNCheckOnlyElement(int arr[], int size) {
    bool ok = true;
    sort(arr, arr+size);
    for (int i = 0; i < size - 1; i++) {
        if(arr[i] == arr[i+1])
            ok = false;
    }
    return ok;
}

