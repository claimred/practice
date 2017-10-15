//Task codewars id: 52945ce49bb38560fe0001d9
/* Task codewars description: Here you will create the classic pascal's triangle.
Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth

The triangle should be returned as a nested array.

> Note: For JavaScript version, your final result is a string representation of the array. Sorry for the inconvenience, test cases are locked so this is the best I could do.
> 
> \- V

for example:
```javascript
pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] 
```
```java
PascalsTriangle.pascal(5); // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] 
```
```ruby
pascal(5) # should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] 
```
```python
pascal(5) # should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] 
```
```clojure
pascal(5) # should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] 
```

To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1").
eg

              [1]
            [1   1]
           [1  2  1]
          [1  3  3  1]
                            
here you get the 3 by adding the 2 and 1 above it.*/

function pascal(depth) 
{
  var res = [];
  
  if (depth == 1)
    return JSON.stringify([[1]]);
  
  depth--;
  
  res.push([1]);  
  res.push([1, 1]);
  
  for (var i = 2; i <= depth; i++)
  {
    var cur = [1], prev = res[i - 1];
    
    for (var j = 0; j < prev.length - 1; j++)
      cur.push(prev[j] + prev[j + 1])
    
    cur.push(1);
    
    res.push(cur);
  }
  
  return JSON.stringify(res);
  
}