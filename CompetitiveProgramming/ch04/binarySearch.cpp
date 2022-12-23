#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;
typedef vector<int> vi;

bool binarySearch(int key, int arr[], int size) {
    bool find = false;
    int start = 0;
    int end = size - 1;
    while (end - start >= 0)
    {
        int mid = (start + end) / 2;
         if (arr[mid] == key) {
             find = true;
        } else if (arr[mid] > key) {   
            end = mid - 1;
 
        } else {  
            start = mid + 1;
        }
    }
    return find;
}


int main() {

    return 0;
}