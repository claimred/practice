//Task codewars id: 5839edaa6754d6fec10000a2
/* Task codewars description: #Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.<br>
The array will always contain letters in only one case.

Example:
```
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
```

(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-) 

I have also created other katas. Take a look if you enjoyed this kata!*/

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function findMissingLetter(array)
{
  var res = "";
  
  array.forEach( function(item, index, array) {
    n = array.length;
        
    if (index == n - 1)
      return;
    
    var c = nextChar(item);    
    
    
    
    if (array[index + 1] != c)
      res = c;
  });
  
  return res;
}