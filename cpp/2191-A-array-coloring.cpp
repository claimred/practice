#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    int t;
    cin >> t;

    while (t--)
    {
        // Your code here

        int n = 0;
        cin >> n;

        struct elem
        {
            int val;
            int color1;
            int color2;
        };

        vector<elem> v;
        v.resize(n);

        for (int i = 0; i < n; ++i)
        {
            int val = 0;
            cin >> val;

            v[i].val = val;
            v[i].color1 = i % 2;
            v[i].color2 = (i + 1) % 2;
        }

        sort(v.begin(), v.end(),
             [](const auto &a, const auto &b)
             {
                 return (a.val < b.val);
             });

        bool result = true;

        for (int i = 0; i < v.size() - 1; ++i) {
            if (v[i].color1 == v[i + 1].color1) {
                result = false;
            }

            if (v[i].color2 == v[i + 1].color2) {
                result = false;
            }
        }

        cout << (result ? "YES" : "NO") << endl;
    }

    return 0;
}