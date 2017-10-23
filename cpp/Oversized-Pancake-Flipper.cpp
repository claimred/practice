/*Problem

Last year, the Infinite House of Pancakes introduced a new kind of pancake. It has a happy face made of chocolate chips on one side (the "happy side"), and nothing on the other side (the "blank side").

You are the head cook on duty. The pancakes are cooked in a single row over a hot surface. As part of its infinite efforts to maximize efficiency, the House has recently given you an oversized pancake flipper that flips exactly K consecutive pancakes. That is, in that range of K pancakes, it changes every happy-side pancake to a blank-side pancake, and vice versa; it does not change the left-to-right order of those pancakes.

You cannot flip fewer than K pancakes at a time with the flipper, even at the ends of the row (since there are raised borders on both sides of the cooking surface). For example, you can flip the first K pancakes, but not the first K - 1 pancakes.

Your apprentice cook, who is still learning the job, just used the old-fashioned single-pancake flipper to flip some individual pancakes and then ran to the restroom with it, right before the time when customers come to visit the kitchen. You only have the oversized pancake flipper left, and you need to use it quickly to leave all the cooking pancakes happy side up, so that the customers leave feeling happy with their visit.

Given the current state of the pancakes, calculate the minimum number of uses of the oversized pancake flipper needed to leave all pancakes happy side up, or state that there is no way to do it.

Input

The first line of the input gives the number of test cases, T. T test cases follow. Each consists of one line with a string S and an integer K. S represents the row of pancakes: each of its characters is either + (which represents a pancake that is initially happy side up) or - (which represents a pancake that is initially blank side up).

Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is either IMPOSSIBLE if there is no way to get all the pancakes happy side up, or an integer representing the the minimum number of times you will need to use the oversized pancake flipper to do it.

Limits

1 ≤ T ≤ 100.
Every character in S is either + or -.
2 ≤ K ≤ length of S.
Small dataset

2 ≤ length of S ≤ 10.
Large dataset

2 ≤ length of S ≤ 1000.*/

#include <string>
#include <vector>
#include <iostream>

using namespace std;

void flip( char *c )
{
   char val = *c;

   if (val == '-')
      *c = '+';

   if (val == '+')
      *c = '-';
}

int solve( std::string &s, int k )
{
   int n = s.length(), wn = n - k + 1;

   bool flipped = true;

   for (int i = 0; i < n; i++)
   {
      if (s[i] != '+')
      {
         flipped = false;
         break;
      }
   }

   if (flipped)
      return 0;

   int ans = 0;

   for (int i = 0; i < n; i++)
   {
      if (s[i] == '-')
      {
         if (i > n - k)
            return -1;

         for (int j = 0; j < k; j++)
         {
            flip(&s[j + i]);
         }

         ans++;
      }
   }

   return ans;
}

int main( int argc, char *argv[] )
{
   int t = 0;
   vector<string> s;
   vector<int> k;

   cin >> t;

   k.resize(t);
   s.resize(t);

   for (int i = 0; i < t; i++)
   {
      cin >> s[i];
      cin >> k[i];
   }

   for (int i = 0; i < t; i++)
   {
      int ans = solve(s[i], k[i]);

      if (ans >= 0)
         cout << "Case #" << i + 1 << ": " << ans << endl;
      else
         cout << "Case #" << i + 1 << ": " << "IMPOSSIBLE" << endl;
   }

   return 0;
}