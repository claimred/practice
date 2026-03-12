#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    bool isPalindrome(string s)
    {
        if (s.empty())
            return true;

        s.erase(remove_if(s.begin(), s.end(), [](auto c){ return isspace(c) || !isalnum(c); }), s.end());
        
        string s1;
        transform(s.begin(), s.end(), back_inserter(s1), [](auto c)
                  { return std::tolower(c); });

        string s2;
        reverse_copy(s1.begin(), s1.end(), back_inserter(s2));

        return s1 == s2;
    }
};

int main()
{

    cout << Solution{}.isPalindrome("") << endl;
    cout << Solution{}.isPalindrome("A man, a plan, a canal: Panama") << endl;
    cout << Solution{}.isPalindrome("A man, a plan, a canal: Panama1") << endl;

    return 0;
}