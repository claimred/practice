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

        int s = 0;
        cin >> s;

        int x = 0;
        cin >> x;

        int sum = 0;

        for (int i = 0; i < n; ++i) {
            int v = 0;
            cin >> v;
            sum += v;
        }

        if (sum > s) {
            cout << "NO";
        } else {
            if ((s - sum) % x == 0) {
                cout << "YES";
            } else {
                cout << "NO";
            }
        }

        cout << endl;
    }
    
    return 0;
}