//Task codewars id: 52756e5ad454534f220001ef
/* Task codewars description: Write a function called `LCS` that accepts two sequences and returns the longest subsequence common to the passed in sequences.

### Subsequence
A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

### Example subsequence
Subsequences of `"abc"` = `"a"`, `"b"`, `"c"`, `"ab"`, `"ac"`, `"bc"` and `"abc"`.

### LCS examples
```javascript
LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"
```
```haskell
lcs "a"         "b"         `shouldBe` ""
lcs "abcdef"    "abc"       `shouldBe` "abc"
lcs "132535365" "123456789" `shouldBe` "12356"
```
```python
lcs( "abcdef" , "abc" ) => returns "abc"
lcs( "abcdef" , "acf" ) => returns "acf"
lcs( "132535365" , "123456789" ) => returns "12356"
```
```ruby
lcs( "abcdef" , "abc" ) => returns "abc"
lcs( "abcdef" , "acf" ) => returns "acf"
lcs( "132535365" , "123456789" ) => returns "12356"
```
```java
Solution.lcs("abcdef", "abc") => returns "abc"
Solution.lcs("abcdef", "acf") => returns "acf"
Solution.lcs("132535365", "123456789") => returns "12356"
```
```go
LCS( "abcdef", "abc" ) => returns "abc"
LCS( "abcdef", "acf" ) => returns "acf"
LCS( "132535365", "123456789" ) => returns "12356"
```
```ocaml
lcs ['a';'b';'c';'d';'e';'f'] ['a';'b';'c'] => returns ['a';'b';'c']
lcs ['a';'b';'c';'d';'e';'f'] ['a';'c';'f'] => returns ['a';'c';'f']
lcs [1;3;2;5;3;5;3;6;5] [1;2;3;4;5;6;7;8;9] => returns [1;2;3;5;6]
```

### Notes
* Both arguments will be strings
* Return value must be a string
* Return an empty string if there exists no common subsequence
* Both arguments will have one or more characters (in JavaScript)
* All tests will only have a single longest common subsequence. Don't worry about cases such as `LCS( "1234", "3412" )`, which would have two possible longest common subsequences: `"12"` and `"34"`.

Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).

### Tips

Wikipedia has an explanation of the two properties that can be used to solve the problem:

- [First property](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem#First_property)
- [Second property](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem#Second_property)
*/

function LCS(x, y) {
  
  var n1 = x.length + 1, n2 = y.length + 1,
      m = new Array(n1);
  
  for (var i = 0; i < n1; i++)
    m[i] = new Array(n2);
  
  for (var i = 0; i < n1; i++)
    m[i][0] = { val: 0, dir: -1 };
  
  for (var i = 0; i < n2; i++)
    m[0][i] = { val: 0, dir: -1 };
     
  for (var i = 1; i < n1; i++)
  {
    for (var j = 1; j < n2; j++)
    {
      if (x[i - 1] == y[j - 1])
        m[i][j] = { val: m[i - 1][j - 1].val + 1, dir: 0 };
      else
      {
        var a = m[i - 1][j].val, b = m[i][j - 1].val;
        
        if (a >= b)
          m[i][j] = { val: a, dir: 1 };
        else
          m[i][j] = { val: b, dir: 2 };
      }
    }
  }    
  
  i = n1 - 1, j = n2 - 1;
  
  if (m[i][j].val == 0)
    return "";
  
  var res = "";
  
  var chooseDir = function(dir) {
    switch (dir)
    {
    case 0:
      return [-1, -1]
    case 1:
      return [-1,  0];
    case 2:
      return [0,  -1];     
    }
    
    return [0, 0];
  };
  
  var dir;    
  
  while (i > 0 && j > 0)
  {
    dir = chooseDir(m[i][j].dir);        
           
    if (m[i + dir[0]][j + dir[1]].val < m[i][j].val)
    {
      res += y[j - 1];
    }
    
    i += dir[0], j += dir[1];
  }
  
  res = res.split("").reverse().join("");

  return res;
}