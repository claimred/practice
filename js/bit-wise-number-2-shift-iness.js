//Task codewars id: 523fba59cb9aaaef4f000135
/* Task codewars description: <h1>Series: bit “Wise”</h1><br>
Javascript’s bitwise operators are probably the least used and least widely understood part of the language: In the domain of the web, where Javascript enjoys unrivaled supremacy, operating on the bits-and-bytes level is often abstracted away (perhaps thankfully).  Despite this, there remain practical uses for the language’s bitwise operators both on the web (for performance reasons) and especially in the burgeoning field of physical computing (Arduino, RaspberryPi, etc.), where Javascript is being embedded in and interacting with things like sensor packages, shift registers and other electronic components that “speak binary”.  In this series of Kata, we’ll familiarize ourselves with some of the “basic moves” of the JS bitwise operators.

<h2>Exercise 2: SHIFT-iness</h2>
One of the tricky things about (x).toString(2) (where x is an integer, which reports the number back in binary) is that it doesn't really tell us the "whole story" about how JS is handling the bits for any given number.  You learn this very quickly when you apply the "~" bitwise operator to an integer. 

For Example:
```javascript
console.log((5).toString(2)); 
``` 
logs "101" to the console...which is what you expect, right?

So "flipping" the bits on the number with the "~" operator should yield 010 - or 2, right?  Let's see:
```javascript
console.log(~5); 
``` 
-6!? -6?! WTF?
 
Well, there's a reason for that.  The binary representation of numbers in JS is handled in the "Two's Complement" system...which is just a fancy way of saying that for any given set of bits, the first bit represents the sign (0 for positive, 1 for negative) of the number and the rest of the bits represent the "absolute value" of the number according to the following simple formula: A) For positive numbers and 0, the value tells how "far" from 0 the number is... i.e. 10 in binary (2 in decimal) means "2 above 0"...so for a 3-bit number in Two's Complement, the number 2 (decimal) would be represented as: "010".  B) For negative numbers, how far above the smallest possible value that can be represented with the number of bits available...e.g. with three bits, the smallest possible number we can represent is -4...so "101" (binary) is like saying "01 more than -4"...or -3.

So in the example above, when we "flipped" the bits of the number 5, there was the extra "sign bit" on the front that got flipped as well.. so what we thought was "101" was *actually* "0101" and when we flipped the bits, we got "1010" - i.e. "Two more than the smallest number possible in this many bits" == "Two more than -8" == "-6". 

Here are all the possible 2's complement numbers in a 3-bit system:
(binary == decimal)<br>
011 == 3<br>
010 == 2<br>
001 == 1<br>
000 == 0<br>
111 == -1<br>
110 == -2<br>
101 == -3<br>
100 == -4<br>

Now the problem;
Extend the Number prototype with a function called "twos" that accepts one parameter (n), and when called, returns the two's-complement representation of the  number in "n" bits in a string.

e.g.
```javascript
(-2).twos(3) == "110";
(8).twos(5) == "01000";
(-8).twos(5) == "11000";
(-16).twos(5) == "10000";
```
*/

function maxBitVal(n) 
{
  var res = 0;
  
  for (var i = 0; i < n; i++)
  {
    res += Math.pow(2, i);
  }
  
  return res;
}

Number.prototype.twos = function(n) 
{
  var val = this.valueOf(), res = new String(), 
      sign;

  if (val < 0)
  {
    val = -val;
    sign = -1;
  }
  else
    sign = 1;
    
  if (sign > 0)
  {
    for (var i = 0; i < n; i++)
    {
      var c = val % 2;
      
      res = c + res;    
      val = Math.floor(val / 2);    
    }
  }
  else
  {
    var maxval = (maxBitVal(n) + 1) / 2;
            
    var dist = maxval - val;
    
    
    for (var i = 0; i < n - 1; i++)
    {
      var c = dist % 2;
      
      res = c + res;    
      dist = Math.floor(dist / 2);    
    }
    
    res = "1" + res;
  }
  
  return res;
}