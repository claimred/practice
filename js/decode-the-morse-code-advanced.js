//Task codewars id: 54b72c16cd7f5154e9000457
/* Task codewars description: <div style="border:1px solid;position:relative;padding:1ex 1ex 1ex 11.1em;"><div style="position:absolute; left:0;top:0;bottom:0; width:10em; padding:1ex;text-align:center;border:1px solid;margin:0 1ex 0 0;color:#000;background-color:#eee;font-variant:small-caps">Part of Series 2/3</div><div>This kata is part of a series on the Morse code. Make sure you solve the [previous part](/kata/decode-the-morse-code) before you try this one. After you solve this kata, you may move to the [next one](/kata/decode-the-morse-code-for-real).</div></div><br>
In this kata you have to write a <a href="https://en.wikipedia.org/wiki/Morse_code">Morse code</a> decoder for <a href="https://en.wikipedia.org/wiki/Electrical_telegraph">wired electrical telegraph</a>.

Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:
<ul><li>"Dot" – is 1 time unit long.</li>
<li>"Dash" – is 3 time units long.</li>
<li>Pause between dots and dashes in a character – is 1 time unit long.</li>
<li>Pause between characters inside a word – is 3 time units long.</li>
<li>Pause between words – is 7 time units long.</li></ul>

However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), <code>1</code> is recorded, and if the line is not connected (remote key is up), <code>0</code> is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols <code>0</code> and <code>1</code>.

For example, the message <code>HEY JUDE</code>, that is <code>···· · −·−− &nbsp; ·−−− ··− −·· ·</code> may be received as follows:

<code>1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011</code>

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

1. Function <code>decodeBits(bits)</code>, that should find out the transmission rate of the message, correctly decode the message to dots <code>.</code>, dashes <code>-</code> and spaces (one between characters, three between words) and return those as a string. Note that some extra <code>0</code>'s may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of <code>1</code>'s is a dot or a dash, assume it's a dot.

2. Function <code>decodeMorse(morseCode)</code>, that would take the output of the previous function and return a human-readable string.

The Morse code table is preloaded for you as <code>MORSE_CODE</code> dictionary (<code>MorseCode</code> class for Java), feel free to use it.

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!

After you master this kata, you may try to <a href="http://www.codewars.com/kata/decode-the-morse-code-for-real">Decode the Morse code, for real</a>.
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
};


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
};

var findUnit = function(bits) {
  
  var res = "", a = 0, b = 0, i = 0;
  
  while (bits[i] == '1')
    a++, i++;
  
  while (i < bits.length)
  {  
    while (bits[i] != '1')
      i++;
    
    while (bits[i] == '1')
    {
      b++, i++;
    }
    
    if (i >= bits.length)
      break;
    
    if (b > 0 && a != b)
      break;
    
    if (b > 0 && a == b)
      b = 0;
  }
  
  if (a == b)
  {
    if (a % 3 == 0)
      return a / 3;
    else
      return a;
  }
      
  if (b == 0)
    return a;   
  
  if (a < b)
    return a;
  else
    return b;
}


var decodeBits = function(bits){
    
  bits = bits.replace(/0+$/g, "");
  bits = bits.replace(/\b0+/g, "");
    
  var unit = findUnit(bits);    
  
  var dash = "", dot = "";
  
  for (var i = 0; i < unit; i++)
    dot += '1';
  
  for (var j = 0; j < 3; j++)
    dash += dot;
  
  var reg = new RegExp(dash, "g");
  bits = bits.replace(reg, '-');
  
  reg = new RegExp(dot, "g")
  bits = bits.replace(reg, '.');
  
  var p1 = "", p2 = "", p3 = "";
  
  for (var i = 0; i < unit; i++)
    p1 += '0';
  
  for (var j = 0; j < 3; j++)
    p2 += p1;
  
  for (var j = 0; j < 7; j++)
    p3 += p1;
  
  reg = new RegExp(p3, "g")
  bits = bits.replace(reg, '   ');
  
  reg = new RegExp(p2, "g")
  bits = bits.replace(reg, ' ');
  
  reg = new RegExp(p1, "g")
  bits = bits.replace(reg, '');
  
  return bits;
}