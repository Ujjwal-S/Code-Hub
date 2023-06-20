#include<bits/stdc++.h>
using namespace std;

int sum(vector<int> nums) {
    int ans = 0;
    for(int i: nums){
        ans += i;
    }
    return ans;
}

int main() {
    int size; cin>>size;
    vector<int> arr;
    while(size--) {
        int inp;
        cin>>inp;
        arr.push_back(inp);
    }
    cout<<"Sum of all the numbers is: "<<sum(arr);
}