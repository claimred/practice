#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

        unordered_map<int, int> m;

        for (int i = 0; i < nums.size(); ++i) {
            m[nums[i]] = i;
        }

        for (int i = 0; i < nums.size(); ++i) {
            auto it = m.find(target - nums[i]);
            if (it != m.end() && it->second != i) {
                return vector<int>{i, it->second};
            }
        }

        return vector<int>{-1, -1};
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    int target = 6;
    vector<int> v{3, 3};

    auto result = Solution{}.twoSum(v, target);
    cout << result[0] << ", " << result[1] << endl;

    return 0;
}