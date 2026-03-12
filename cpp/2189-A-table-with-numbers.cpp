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
        int n = 0;
        cin >> n;

        int h = 0;
        cin >> h;

        int l = 0;
        cin >> l;

        int count_h = 0;
        int count_l = 0;

        if (h > l) swap(h, l);

        for (int i = 0; i < n; ++i)
        {
            int val = 0;
            cin >> val;
            
            if (val <= h) {
                count_h++;
            }

            if (val <= l) {
                count_l++;
            }
        }

        cout << min(count_h, count_l / 2) << endl;
    }

    return 0;
}