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