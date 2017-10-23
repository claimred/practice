//Task codewars id: 54b724efac3d5402db00065e
/* Task codewars description: <div style="border:1px solid;position:relative;padding:1ex 1ex 1ex 11.1em;"><div style="position:absolute;left:0;top:0;bottom:0; width:10em; padding:1ex;text-align:center;border:1px solid;margin:0 1ex 0 0;color:#000;background-color:#eee;font-variant:small-caps">Part of Series 1/3</div><div>This kata is part of a series on the Morse code. After you solve this kata, you may move to the [next one](/kata/decode-the-morse-code-advanced).</div></div><br>In this kata you have to write a simple <a href="https://en.wikipedia.org/wiki/Morse_code">Morse code</a> decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter <code>A</code> is coded as <code>·−</code>, letter <code>Q</code> is coded as <code>−−·−</code>, and digit <code>1</code> is coded as <code>·−−−</code>. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message <code>HEY JUDE</code> in Morse code is <code>···· · −·−− &nbsp; ·−−− ··− −·· ·</code>.

**NOTE:** Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal <a href="https://en.wikipedia.org/wiki/SOS">SOS</a> (that was first issued by <a href="https://en.wikipedia.org/wiki/RMS_Titanic">Titanic</a>), that is coded as <code>···−−−···</code>. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function <code>decodeMorse(morseCode)</code>, that would take the morse code as input and return a decoded human-readable string.

For example:

```coffeescript
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```
```cpp
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```
```csharp
MorseCodeDecoder.Decode('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```
```elixir
MorseCode.decode('.... . -.--   .--- ..- -.. .')
#=> "HEY JUDE"
```
```go
DecodeMorse(".... . -.--   .--- ..- -.. .")
// should return "HEY JUDE"
```
```haskell
decodeMorse ".... . -.--   .--- ..- -.. ."
--should return "HEY JUDE"
```
```java
MorseCodeDecoder.decode(".... . -.--   .--- ..- -.. .")
//should return "HEY JUDE"
```
```javascript
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```
```php
decode_morse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```
```python
decodeMorse('.... . -.--   .--- ..- -.. .')
#should return "HEY JUDE"
```
```ruby
decodeMorse('.... . -.--   .--- ..- -.. .')
#should return "HEY JUDE"
```
```typescript
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```

The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: <code>MORSE_CODE['.--']</code>, in Java it is <code>MorseCode.get('.--')</code>, in C# it is <code>MorseCode.Get('.--')</code>, in Haskell the codes are in a <code>Map String String</code> and can be accessed like this: <code>morseCodes ! ".--"</code>, in Elixir it is `morse_codes` variable.

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

After you complete this kata, you may try yourself at <a href="http://www.codewars.com/kata/decode-the-morse-code-advanced">Decode the Morse code, advanced</a>.
*/

decodeMorseWord = function(morseWord)
{
  var t = morseWord.split(" "), res = "";
    
  
  for (var i = 0; i < t.length; i++)
  {    
    var v = MORSE_CODE[t[i]];
      
    res += v;
  }
        
  return res;
}


decodeMorse = function(morseCode) 
{
  morseCode = morseCode.replace(/^\s+|\s+$/g, "");
  var words = morseCode.split("   "), res = "";
  
  for (var i = 0; i < words.length; i++)
  {  
    var v = decodeMorseWord(words[i]);    
    
    res += v + " ";
  }
    
  res = res.slice(0, -1);
  
  return res;
}