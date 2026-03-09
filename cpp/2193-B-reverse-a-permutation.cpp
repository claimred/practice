#include <bits/stdc++.h>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    
    int t;
    cin >> t;
    
    while (t--) {
        // Your code here

        int n = 0;
        cin >> n;

        vector<int> v;
        v.resize(n);

        for (int i = 0; i < n; ++i) {
            cin >> v[i];
        }

        for (int i = 0; i < n; ++i) {
            if (v[i] != n - i) {
                auto it = std::max_element(v.begin() + i, v.end());
                std::reverse(v.begin() + i, std::next(it));
                break;
            }
        }

        for (int i = 0; i < n; ++i) {
            cout << v[i] << " ";
        }

        cout << endl;
    }
    
    return 0;
}