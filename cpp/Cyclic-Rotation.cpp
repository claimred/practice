
/* codility - CyclicRotation */

#include <cstdlib>
#include <cstdio>

#include <cassert>

#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution( vector<int> &A, int K )
{
   if (A.empty())
      return A;

   while (K-- > 0)
   {
      int t = *(A.end() - 1);

      A.pop_back();

      A.insert(A.begin(), t);
   }

   return A;
}


int main(int argc, char *argv[])
{
   static const int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
   std::vector<int> a(arr, arr + sizeof(arr) / sizeof(arr[0]));

   vector<int> res = solution(a, 3);



   return EXIT_SUCCESS;
}