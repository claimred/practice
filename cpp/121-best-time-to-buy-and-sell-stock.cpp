#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
        int minSoFar = prices[0], res = 0;
  
        for (int i = 1; i < prices.size(); i++) {

            // Update the minimum value seen so far
            minSoFar = min(minSoFar, prices[i]);
            
            // Update result if we get more profit                
            res = max(res, prices[i] - minSoFar);
        }
        return res;
    }
};

int main() {

    auto v = std::vector{7, 1, 5, 3, 6, 4};
    cout << Solution{}.maxProfit(v) << std::endl;

    v = std::vector{7, 6, 4, 3, 1};
    cout << Solution{}.maxProfit(v) << std::endl;

    v = std::vector{2, 4, 1};
    cout << Solution{}.maxProfit(v) << std::endl;

    v = std::vector{2, 1, 2, 0, 1};
    cout << Solution{}.maxProfit(v) << std::endl;

    return 0;
}