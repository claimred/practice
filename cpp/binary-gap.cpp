#include <cstdlib>
#include <cstdio>

#include <cassert>

/* A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

Write a function:

int solution(int N);
that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap. */

int solve( const int c ) 
{
   int n = c, res = 0, t = 0;
   bool trail = false;

   while (n)
   {
      if (n & 1) 
      {
         if (!trail)
            trail = true;
         else if (trail) 
         {
            if (t > res)
               res = t;
            t = 0;
         }
      }
      else
      {
         if (trail)
            t++;
      }

      n >>= 1;
   }

   return res;
}


int main( int argc, char *argv[] ) 
{
   int a, res, ans;

   solve(74901729);

   a = 20, res = solve(a), ans = 1;
   assert(res == ans);

   a = 529, res = solve(a), ans = 4;
   assert(res == ans);

   a = 1041, res = solve(a), ans = 5;
   assert(res == ans);

   a = 15, res = solve(a), ans = 0;
   assert(res == ans);

   printf("%i", res);


   return EXIT_SUCCESS;
}