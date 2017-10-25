/* codility binarygap */

#include <cstdlib>
#include <cstdio>

#include <cassert>

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