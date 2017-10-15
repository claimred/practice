//Task codewars id: 578553c3a1b8d5c40300037c
/* Task codewars description: Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

Examples:
```
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```*/

#include <stddef.h>

unsigned binary_array_to_numbers(const unsigned *bits, size_t count)
{
   unsigned res = 0;

   for (int i = 0; i < count; i++)
      res += bits[i] << (count - i - 1);
      
   return res;   
}
