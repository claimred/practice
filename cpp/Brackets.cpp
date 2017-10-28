
/* codility - Brackets */

#include <cstdlib>
#include <cstdio>

#include <cassert>

#include <vector>
#include <algorithm>
#include <numeric>
#include <map>


int solution( std::string &S )
{
   std::map<char, char> match;
   std::vector<char> stack;

   match['('] = ')';
   match['['] = ']';
   match['{'] = '}';

   for (auto i : S)
   {
      if (i == '(' || i == '[' || i == '{')
         stack.push_back(i);

      if (i == ')' || i == ']' || i == '}')
      {
         if (stack.empty())
            return 0;

         char c = *(stack.end() - 1);

         if (match[c] != i)
            return 0;

         stack.pop_back();
      }

   }

   if (!stack.empty())
      return 0;

   return 1;
}

int main(int argc, char *argv[])
{
   std::string S("[()()");
   int res = solution(S);

   printf("%i\n", res);




   return EXIT_SUCCESS;
}