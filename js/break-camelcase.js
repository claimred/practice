//Task codewars id: 5208f99aee097e6552000148
/* Task codewars description: Complete the solution so that the function will break up camel casing, using a space between words.

### Example 

```javascript
solution('camelCasing') // => should return 'camel Casing'
```
```coffeescript
solution('camelCasing') # => should return 'camel Casing'
```
```ruby
solution('camelCasing') # => should return 'camel Casing'
```
```haskell
solution "camelCasing" --  => should return "camel Casing"
```
```csharp
Kata.BreakCamelCase("camelCasing") => "camel Casing"
```*/

// complete the function
function solution(string) 
{
  var b = 0;
  var res = [];
  
  for (var i = 0; i < string.length; i++)
  {
    if (string[i] >= 'A' && string[i] <= 'Z')
    {
      res.push(string.substring(b, i));
      b = i;
    }
    
  }
  
  res.push(string.substring(b, string.length));
  
  var ress = res.join(" ");
  
  return ress;
    
}