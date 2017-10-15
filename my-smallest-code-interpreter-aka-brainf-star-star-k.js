//Task codewars id: 526156943dfe7ce06200063e
/* Task codewars description: Inspired from real-world [Brainf\*\*k](http://en.wikipedia.org/wiki/Brainfuck), we want to create an interpreter of that language which will support the following instructions (the machine memory or 'data' should behave like a potentially infinite array of bytes, initialized to 0):

* `>` increment the data pointer (to point to the next cell to the right).
* `<` decrement the data pointer (to point to the next cell to the left).
* `+` increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
* `-` decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
* `.` output the byte at the data pointer.
* `,` accept one byte of input, storing its value in the byte at the data pointer.
* `[` if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching `]` command.
* `]` if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching `[` command.

The function will take in input...

* the program code, a string with the sequence of machine instructions,
* the program input, a string, eventually empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the `,` instruction

... and will return ...

* the output of the interpreted code (always as a string), produced by the `.` instruction.

~~~if:bf
For BF: The code and input are separated by `'!'`.
~~~
*/

function fillBrackets(code)
{
  var stack = [],
      map = new Map();

  var a = -1, b = -1;
      
  for (var i = 0; i < code.length; i++)
  {
    if (code[i] == '[')
      stack.push(i);
    
    if (code[i] == ']')
    {
      var s = stack.pop();
      
      map[s] = i;
      map[i] = s;
    }    
  }
  
  return map;
}


function brainLuck(code, input) 
{
  code = code.split("");
  
  var output = [], pointer = 0, cpointer = 0;
  var data = [];
  
  //"infinite array", should be dynamic
  for (var i = 0; i < 100; i++)
    data[i] = String.fromCharCode(0);  
  
  var brackets = fillBrackets(code);    
  
  for (var i = 0; i < code.length; i++)
  {    
    switch (code[i])
    {
    case ',':      
      data[pointer] = input[cpointer];      
      cpointer++;
      break;
    case '.':
      output.push(data[pointer]);
      break;
    case '+':    
      var t = data[pointer].charCodeAt(0) + 1;
      
      if (t > 255)
        t = 0;
    
      data[pointer] = String.fromCharCode(t);
     
      break;
    case '-':
      var t = data[pointer].charCodeAt(0) - 1;
      
      if (t < 0)
        t = 255;
    
      data[pointer] = String.fromCharCode(t);
     
      break;
    case '[':
      if (data[pointer] == String.fromCharCode(0))
      {
        i = brackets[i];
       
      }
      break;
    case ']':
      if (data[pointer] != String.fromCharCode(0))
      {
        i = brackets[i];
       
      }
      break;
      
    case '>':
      pointer++;
      break;
    
    case '<':
      pointer--;
      break            
      
    default:
      return "";
      
    }        
  } 
  
  return output.join("");
}