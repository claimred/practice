/* codility - OddOccurencesInArray */

#include <cstdlib>
#include <cstdio>

#include <cassert>

#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> &A) {
   
   // write your code in C++14 (g++ 6.2.0)

   std::sort(A.begin(), A.end());

   int i = 0, k = 0, n = A.size();
   int val = A[i];

   while (true)
   {
      val = A[i], k = 0;

      while (A[i] == val && i < n)
         i++, k++;

      if (k % 2 != 0)
         return val;
   }




 
   return -1;
}

int main(int argc, char *argv[])
{
   static const int arr[] = {9, 3, 9, 3, 9, 7, 9};
   std::vector<int> a(arr, arr + sizeof(arr) / sizeof(arr[0]));

   printf("%i", solution(a));



   return EXIT_SUCCESS;
}