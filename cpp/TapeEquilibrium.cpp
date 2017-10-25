
/* codility - TapeEquilibrium */

#include <cstdlib>
#include <cstdio>

#include <cassert>

#include <vector>
#include <algorithm>
#include <numeric>



int solution(std::vector<int> &A) 
{
   int a = A[0], b, diff;

   b = std::accumulate(A.begin() + 1, A.end(), 0, std::plus<int>());

   diff = std::abs(a - b);

   for (unsigned int i = 1; i < A.size() - 1; i++) 
   {
      int d;

      a += A[i];
      b -= A[i];

      d = std::abs(a - b);

      if (d < diff)
         diff = d;
   }

   

   return diff;   
}

int main(int argc, char *argv[])
{
   static const int arr[] = {3, 1, 2, 4, 3};
   std::vector<int> a(arr, arr + sizeof(arr) / sizeof(arr[0]));

   int res = solution(a);

   printf("%i\n", res);



   return EXIT_SUCCESS;
}