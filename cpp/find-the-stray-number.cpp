//Task codewars id: 57f609022f4d534f05000024
/* Task codewars description: You are given an *odd-length* array of integers, in which all of them are the same, except for one single number.

Implement the method **stray** which accepts such array, and returns that single different number.

**The input array will always be valid!** (odd-length >= 3)

Examples:

[1, 1, 2] => 2

[17, 17, 3, 17, 17, 17, 17] => 3
*/

int stray(std::vector<int> numbers) {
   int k = 0;

   while (numbers[k] == numbers[k + 1])
      k++;

   return numbers[k + 1];
};
