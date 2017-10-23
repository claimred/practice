//Task codewars id: 523a86aa4230ebb5420001e1
/* Task codewars description: What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

```
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
```

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

```javascript
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```
```php
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']); // => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']); // => []
```
```javascript
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```
```coffeescript
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```
```python
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```
```csharp
Kata.Anagrams("abba", new List<string> {"aabb", "abcd", "bbaa", "dada"}) => new List<string> {"aabb", "bbaa"}

Kata.Anagrams("racer", new List<string> {"crazer", "carer", "racar", "caers", "racer"}) => new List<string> {"carer", "racer"}

Kata.Anagrams("laser", new List<string> {"lazing", "lazy", "lacer"}) => new List<string>()
```
```r
anagrams("abba", c("aabb", "abcd", "bbaa", "dada")) => c("aabb", "bbaa")

anagrams("racer", c("crazer", "carer", "racar", "caers", "racer")) => c("carer", "racer")

anagrams("laser", c("lazing", "lazy", "lacer")) => character(0) # no anagram, return empty vector
```

*/

function anagrams(word, words) 
{
  var res = [];
  word = word.split("").sort().join('');
  
  for (var i = 0; i < words.length; i++)
  {
    var w = words[i].split("").sort().join('');
    
    if (w == word)
      res.push(words[i]);
  }
  
  return res;   
}