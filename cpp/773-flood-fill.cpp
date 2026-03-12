#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {

        if (image[sr][sc] == color) return image;
        
        static const vector<pair<int, int>> neighbours = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };
        stack<pair<int, int>> s;
        s.push({sr, sc});

        while (!s.empty()) {
            auto p = s.top();
            s.pop();

            if (image[p.first][p.second] == color) continue;

            for (const auto n : neighbours) {
                const auto cur = pair{p.first + n.first, p.second + n.second};

                if (cur.first >= 0 && cur.first < image.size() && 
                    cur.second >= 0 && cur.second < image[0].size()) {
                    if (image[cur.first][cur.second] == image[p.first][p.second])
                        s.push(cur);
                }
            }

            image[p.first][p.second] = color;
        }

        return image;
    }
};

int main() {

    //vector<vector<int>> image = {{0,0,0},{0,0,0}};

    vector<vector<int>> image = {{1,1,1},{1,1,0},{1,0,1}};

    auto result = Solution{}.floodFill(image, 1, 1, 2);


    return 0;
}