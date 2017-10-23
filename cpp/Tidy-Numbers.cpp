/*Problem

Tatiana likes to keep things tidy. Her toys are sorted from smallest to largest, her pencils are sorted from shortest to longest and her computers from oldest to newest. One day, when practicing her counting skills, she noticed that some integers, when written in base 10 with no leading zeroes, have their digits sorted in non-decreasing order. Some examples of this are 8, 123, 555, and 224488. She decided to call these numbers tidy. Numbers that do not have this property, like 20, 321, 495 and 999990, are not tidy.

She just finished counting all positive integers in ascending order from 1 to N. What was the last tidy number she counted?

Input

The first line of the input gives the number of test cases, T. T lines follow. Each line describes a test case with a single integer N, the last number counted by Tatiana.

Output

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the last tidy number counted by Tatiana.

Limits

1 ≤ T ≤ 100.
Small dataset

1 ≤ N ≤ 1000.
Large dataset

1 ≤ N ≤ 1018.*/

#include <vector>
#include <string>
#include <iostream>

using namespace std;


void solve( string &s )
{
   int n = s.length();
   bool found = false;

   while (true)
   {
      found = false;

      for (int i = 0; i < n - 1; i++)
      {
         if (s[i] > s[i + 1])
         {
            found = true;
            s[i] = s[i] - 1;

            for (int j = i + 1; j < n; j++)
               s[j] = '9';
         }
      }

      if (!found)
         break;
   }
}

int main( int argc, char *argv[] )
{
   int t = 0;
   vector<string> s;   
   
   cin >> t;

   s.resize(t);

   for (int i = 0; i < t; i++)
   {
      cin >> s[i];
   }

   for (int i = 0; i < t; i++)
   {
      
      solve(s[i]);

      s[i].erase(0, s[i].find_first_not_of('0'));

      cout << "Case #" << i + 1 << ": " << s[i] << endl;
   }

   return 0;
}