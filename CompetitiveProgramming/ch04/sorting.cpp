#include<iostream>
#include<vector>

using namespace std;
typedef vector<int> vi;

int size = 8;
int sorted[8];
int count = 0;

void bubbleSort(int array[], int size);
void merge(int arr[], int left, int right);
void partial(int arr[], int left, int right);

int findMax(int arr[], int size);
void CountingSort(int arr[], int size);

int main()
{
    int testArray[8] = { 3,5, 3,7,4,1,8,6 };
    int size = 8;
    CountingSort(testArray, size);
    for (int i = 0; i < 8; i++) {
        cout << testArray[i] << " ";
    }
        return 0;
}

void bubbleSort(int array[], int size) {
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size - 1; j++)
        {
            if(array[j] > array[j + 1]) 
            {
                swap(array[j], array[j + 1]);
            }
        }
    }
}

// 0 ~ 7 
// 0 ~ 3 / 4 ~ 7
// 0 ~ 1 / 2 ~ 3 / 4 ~ 5 / 6 ~ 7 // on merge
// 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 return 
void partial(int arr[], int left, int right) {
    if(left < right) {
        int mid = (left + right) / 2;
        partial(arr, left, mid);
        partial(arr, mid + 1, right);
        merge(arr, left, right);
    }
}

// 배열이 주어졌다면, 정렬
void merge(int arr[], int left, int right) {
    int mid = (left + right) / 2;
    int i = left;
    int k = left;
    int j = mid + 1;
    while (i <= mid && j <= right) {
        if(arr[i] < arr[j]) {
            sorted[k] = arr[i];
            i++;
        } else {
            sorted[k] = arr[j];
            j++;
        }
        k++;
    }

    // 한 쪽이 먼저 정렬 되었다면, 남은 쪽은 그대로 삽입
    while(i <= mid) {
        sorted[k] = arr[i];
        k++;
        i++;
    } 
    
    while(j <= right) {
        sorted[k] = arr[j];
        k++;
        j++;
    }

    for (int i = left; i < k; i++) {
        arr[i] = sorted[i];
    }
}

void CountingSort(int arr[], int size) {
    int max = findMax(arr, size);

    int counting[max] = { 0, };
    for (int i = 0; i < size; i++)
    {
        counting[arr[i]-1]++;
    }


    for (int i = 0; i < max; i++)
    {
        if(counting[i] != 0) {
            for (int j = 0; j < counting[i]; j++)
            {
                cout << i + 1<< " ";
            }
        }
        cout << "\n";
    }
}

int findMax(int arr[], int size) {
    int max = 0;
    for (int i = 0; i < size; i++)
    {
        if(arr[i] > max)
            max = arr[i];
    }
    return max;
}