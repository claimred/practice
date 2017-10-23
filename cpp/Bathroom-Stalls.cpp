/* Problem

A certain bathroom has N + 2 stalls in a single row; the stalls on the left and right ends are permanently occupied by the bathroom guards. The other N stalls are for users.

Whenever someone enters the bathroom, they try to choose a stall that is as far from other people as possible. To avoid confusion, they follow deterministic rules: For each empty stall S, they compute two values LS and RS, each of which is the number of empty stalls between S and the closest occupied stall to the left or right, respectively. Then they consider the set of stalls with the farthest closest neighbor, that is, those S for which min(LS, RS) is maximal. If there is only one such stall, they choose it; otherwise, they choose the one among those where max(LS, RS) is maximal. If there are still multiple tied stalls, they choose the leftmost stall among those.

K people are about to enter the bathroom; each one will choose their stall before the next arrives. Nobody will ever leave.

When the last person chooses their stall S, what will the values of max(LS, RS) and min(LS, RS) be?

Solving this problem

This problem has 2 Small datasets and 1 Large dataset. You must solve the first Small dataset before you can attempt the second Small dataset. You will be able to retry either of the Small datasets (with a time penalty). You will be able to make a single attempt at the Large, as usual, only after solving both Small datasets.

Input

The first line of the input gives the number of test cases, T. T lines follow. Each line describes a test case with two integers N and K, as described above.

Output

For each test case, output one line containing Case #x: y z, where x is the test case number (starting from 1), y is max(LS, RS), and z is min(LS, RS) as calculated by the last person to enter the bathroom for their chosen stall S.

Limits

1 ≤ T ≤ 100.
1 ≤ K ≤ N.
Small dataset 1

1 ≤ N ≤ 1000.
Small dataset 2

1 ≤ N ≤ 106.
Large dataset

1 ≤ N ≤ 1018.*/

#include <vector>
#include <string>
#include <iostream>
#include <algorithm>
#include <map>

using namespace std;

typedef unsigned long long mlong;
typedef pair<mlong, mlong> mpair;

bool pred( mpair &m1, mpair &m2 )
{
   if (m1.first < m2.first)
      return true;

   return false;
}

void cinsert( vector<mpair> &v, mlong val )
{
   for (int i = 0; i != v.size(); i++)
   {
      if (v[i].first == val)
      {
         v[i].second++;
         return;
      }
   }

   v.push_back(mpair(val, 1));
   sort(v.begin(), v.end(), pred);
}

void cpop( vector<mpair> &v, mlong &val )
{
   mpair t = v.back();

   v.back().second--;
   val = t.first;

   if (v.back().second == 0)
      v.pop_back();
}

void solve( mlong n, mlong k, mpair &ans )
{
   mlong t = n, t1, t2;
   std::vector<mpair> tt;

   if (t == 1)
   {
      t1 = 0;
      t2 = 0;
   }
   else
   {
      if (t % 2 == 0)
      {
         t1 = t / 2 - 1;
         t2 = t / 2;
      }
      else
      {
         t1 = t / 2;
         t2 = t / 2;
      }
   }

   ans.first = t2;
   ans.second = t1;

   cinsert(tt, t1);
   cinsert(tt, t2);

   k--;

   while (k > 0)
   {
      mlong c = 0;

      cpop(tt, c);

      if (c == 1)
      {
         t1 = 0;
         t2 = 0;
      }
      else
      {
         if (c % 2 == 0)
         {
            t1 = c / 2 - 1;
            t2 = c / 2;
         }
         else
         {
            t1 = c / 2;
            t2 = c / 2;
         }
      }

      ans.first = t2;
      ans.second = t1;

      cinsert(tt, t1);
      cinsert(tt, t2);

      k--;
   }

 
  
   
}

int main( int argc, char *argv[] )
{  
   int t = 0;
   vector<mlong> n;
   vector<mlong> k;   
   
   mpair ans;

   solve(1000, 1000, ans);
   solve(999999, 999998, ans);

   cin >> t;

   n.resize(t);
   k.resize(t);

   for (int i = 0; i < t; i++)
   {
      cin >> n[i];
      cin >> k[i];
   }

   for (int i = 0; i < t; i++)
   {
      mpair ans;

      solve(n[i], k[i], ans);
      cout << "Case #" << i + 1 << ": " << ans.first << " " << ans.second << endl;
   }

   return 0;
}