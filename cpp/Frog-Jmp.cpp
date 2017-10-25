
/* codility - FrogJmp */

#include <cstdlib>
#include <cstdio>

#include <cassert>

#include <vector>
#include <algorithm>
#include <numeric>



int solution(int X, int Y, int D) 
{
   int rem = (Y - X) % D, res = (Y - X) / D;

   if (rem != 0)
      return res + 1;
   else
      return res;
}

int main(int argc, char *argv[])
{
   static const int arr[] = {3, 1, 2, 4, 3};
   std::vector<int> a(arr, arr + sizeof(arr) / sizeof(arr[0]));

   int res = solution(a);

   printf("%i\n", res);



   return EXIT_SUCCESS;
}