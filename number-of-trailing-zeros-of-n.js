//Task codewars id: 52f787eb172a8b4ae1000a34
/* Task codewars description: Write a program that will calculate the number of trailing zeros in a factorial of a given number.

http://mathworld.wolfram.com/Factorial.html 

N! = 1 \* 2 \* 3 \* 4 ... N


```
zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
that has 2 trailing zeros 4790016(00)
```


Be careful 1000! has length of 2568 digital numbers.
*/

function zeros (n) {
  var a = [], b = [];
  var z = 0;
  
  for (var i = 1; i <= n; i++)
  {
    if (i % 5 == 0)
    {
      var j = i;
      
      while (j % 5 == 0)
      {
        j = Math.floor(j / 5);
        z++
      }
      
    }
    
  }
  
  return z;
}