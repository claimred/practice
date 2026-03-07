#include <bits/stdc++.h>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    int t = 0;
    cin >> t;

    for (int i = t + 1; i <= 9999; ++i) {

        int a = i / 1000;
        int b = (i % 1000) / 100;
        int c = (i % 100) / 10;
        int d = i % 10;

        std::set<int> s;

        s.insert(a);
        s.insert(b);
        s.insert(c);
        s.insert(d);

        if (s.size() == 4) {
            cout << a << b << c << d << endl;
            return 0 ;
        }
    }
    
    return 0;
}