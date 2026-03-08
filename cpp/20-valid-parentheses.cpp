#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool isValid(string str) {

        stack<char> s;

        for (auto c : str) {
            if (c == '(' || c == '[' || c == '{') s.push(c);

            else if (c == ')' || c == ']' || c == '}') {

                if (s.empty()) {
                    return false;
                }

                auto c2 = s.top();

                if (c == ')' && c2 != '(') {
                    return false;
                }

                if (c == ']' && c2 != '[') {
                    return false;
                }

                if (c == '}' && c2 != '{') {
                    return false;
                }

                s.pop();
            }

        }

        return s.empty();
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    int target = 6;
    vector<int> v{3, 3};

    cout << Solution{}.isValid("((()))") << endl;
    cout << Solution{}.isValid("()()") << endl;
    cout << Solution{}.isValid("(") << endl;

    return 0;
}