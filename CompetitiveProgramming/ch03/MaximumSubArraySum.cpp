#include <iostream>
#include <vector>
using namespace std;

typedef vector<int> vi;

void On3MSAS(int n, int array[]);
void On2MSAS(int n, int array[]);
void OnMSAS(int n, int array[]);

int main() {
    int n = 9;
    int array[] = {-1, 2, 4, -3, 5, 2, -5, 2};
    On3MSAS(n, array);
    On2MSAS(n, array);
    OnMSAS(n, array);
    return 0;
}

// O(n^3) 
void On3MSAS(int n, int array[]) {
    int best = 0;
    for (int i = 0; i < n; i++) {
        for(int j = i; j < n; j++) {
            int sum = 0;
            for (int k = i; k <= j; k++) {
                sum += array[k];
            }
            best = max(best, sum);
        }
    }
    cout << best << "\n";
    cout << "O(n^3)" << "\n";
}

// O(n^2)
// reduce repeat and calaculator sum together.
void On2MSAS(int n, int array[]) {
    int best = 0;
    for (int i = 0; i < n; i++)
    {
        int sum = 0;
        for (int j = i; j < n; j++)
        {
            sum += array[j];
            best = max(best, sum);
        }
    }
    cout << best << "\n";
    cout << "O(n^2)"
         << "\n";
}

// O(n)
/*
    1. If the partial arrangement consists of only one element of position k.
    2. Create a partial array by adding elements of position k to the partial array ending at position k-1
*/
void OnMSAS(int n, int array[]) {
    int best = 0, sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum = max(array[i], sum + array[i]);
        best = max(best, sum);
    }
    cout << best << "\n";
    cout << "O(n)"
         << "\n";
}