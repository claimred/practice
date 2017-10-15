//Task codewars id: 53e57dada0cb0400ba000688
/* Task codewars description: Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

C# is using a `long`, which may not have the best precision, but the tests are locked so we can't change it.

Sample words, with their rank:<br />
ABAB = 2<br />
AAAB = 1<br />
BAAA = 4<br />
QUESTION = 24572<br />
BOOKKEEPER = 10743
*/

//should be lookup table
function factorial(n) 
{
  var r = 1, i = 0;;
  
  for (i = 0; i < n; i++)
    r *= (i + 1);
  
  return r;
}

function multifactorial(n, cc)
{
  var r = factorial(n), c = 1;
  
  for (var i = 0; i < 30; i++)
    c *= factorial(cc[i]);
  
  return r / c;
}

function findMaxChar(perm)
{
  var maxch = perm[0];
  
  for (var i = 0; i < perm.length; i++)
  {
    if (perm[i] < maxch)
      maxch = perm[i];
  }
  
  return maxch;
}

function listPosition(word) 
{
  var perm = word.split(""),
      maxch;
      
  maxch = findMaxChar(perm);
  
  for (var i = 0; i < perm.length; i++)
  {
    perm[i] = perm[i].charCodeAt(0) - maxch.charCodeAt(0);    
  }
  
  var cc = new Array(30);
  
  for (var i = 0; i < 30; i++)
    cc[i] = 0;
  
  for (var i = 0; i < perm.length; i++)
    cc[perm[i]]++;
  
  var n = perm.length, num = 0;
  
  for (var i = 0; i < n; i++)
  {
    for (var j = 0; j < perm[i]; j++)
    {
      if (cc[j] > 0)
      {
        cc[j]--;
        num += multifactorial(n - i - 1, cc);
        cc[j]++;
      }
    }
    
    if (cc[perm[i]] > 0)
      cc[perm[i]]--;
  }
  
  return num + 1;
}