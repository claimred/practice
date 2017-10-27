
/* codility - PermCheck */

#include <cstdlib>
#include <cstdio>

#include <cassert>

#include <vector>
#include <algorithm>
#include <numeric>



int solution( std::vector<int> &A )
{
   int n = A.size();

   std::vector<int> t;
   t.resize(n);
   std::fill(t.begin(), t.end(), 0);

   for (auto i : A)
   {
      if (i < 1 || i > n)
         return 0;

      if (t[i - 1] != 0)
         return 0;

      if (t[i - 1] == 0)
         t[i - 1] = 1;
   }

   return 1;
}

int main(int argc, char *argv[])
{
   static const int arr[] = {2, 2, 4, 2};
   std::vector<int> a(arr, arr + sizeof(arr) / sizeof(arr[0]));

   int res = solution(a);

   printf("%i\n", res);



   return EXIT_SUCCESS;
}