/* codility - PermMissingElem */

#include <cstdlib>
#include <cstdio>

#include <cassert>

#include <vector>
#include <algorithm>

using namespace std;

//It's O(nlogn) actually :d
int solution(vector<int> &A) {
   // write your code in C++14 (g++ 6.2.0)

   if (A.empty())
      return 1;

   sort(A.begin(), A.end());

   for (unsigned int i = 0; i < A.size(); i++)
   {
      if (i + 1 != A[i])
         return i + 1;
   }

   return A.size() + 1;
}

int main(int argc, char *argv[])
{
   static const int arr[] = {2, 1};
   std::vector<int> a(arr, arr + sizeof(arr) / sizeof(arr[0]));

   int res = solution(a);

   printf("%i\n", res);



   return EXIT_SUCCESS;
}