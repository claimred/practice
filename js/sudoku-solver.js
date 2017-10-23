//Task codewars id: 5296bc77afba8baa690002d7
/* Task codewars description: Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value ```0``` representing an unknown square. 

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see [the Wikipedia article](http://en.wikipedia.org/wiki/Sudoku).


```javascript
var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
 Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
```
```php
sudoku([
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
]); /* => [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
] 
```
```python
puzzle = [[5,3,0,0,7,0,0,0,0],
          [6,0,0,1,9,5,0,0,0],
          [0,9,8,0,0,0,0,6,0],
          [8,0,0,0,6,0,0,0,3],
          [4,0,0,8,0,3,0,0,1],
          [7,0,0,0,2,0,0,0,6],
          [0,6,0,0,0,0,2,8,0],
          [0,0,0,4,1,9,0,0,5],
          [0,0,0,0,8,0,0,7,9]]

sudoku(puzzle)
# Should return
# [[5,3,4,6,7,8,9,1,2],
#  [6,7,2,1,9,5,3,4,8],
#  [1,9,8,3,4,2,5,6,7],
#  [8,5,9,7,6,1,4,2,3],
#  [4,2,6,8,5,3,7,9,1],
#  [7,1,3,9,2,4,8,5,6],
#  [9,6,1,5,3,7,2,8,4],
#  [2,8,7,4,1,9,6,3,5],
#  [3,4,5,2,8,6,1,7,9]]
```
```haskell
puzzle = [[5,3,0,0,7,0,0,0,0],
          [6,0,0,1,9,5,0,0,0],
          [0,9,8,0,0,0,0,6,0],
          [8,0,0,0,6,0,0,0,3],
          [4,0,0,8,0,3,0,0,1],
          [7,0,0,0,2,0,0,0,6],
          [0,6,0,0,0,0,2,8,0],
          [0,0,0,4,1,9,0,0,5],
          [0,0,0,0,8,0,0,7,9]]

sudoku puzzle
{- Should return
[[5,3,4,6,7,8,9,1,2],
 [6,7,2,1,9,5,3,4,8],
 [1,9,8,3,4,2,5,6,7],
 [8,5,9,7,6,1,4,2,3],
 [4,2,6,8,5,3,7,9,1],
 [7,1,3,9,2,4,8,5,6],
 [9,6,1,5,3,7,2,8,4],
 [2,8,7,4,1,9,6,3,5],
 [3,4,5,2,8,6,1,7,9]]
-}
```*/

function checkSolution(x, y, puzzle)
{
  var n = puzzle[0].length;
  
  var val = puzzle[x][y];
  
  for (var i = 0; i < n; i++)
  {
    if (i == x)
      continue;
    
    if (puzzle[i][y] == val)
      return false;
  }
    
  for (var j = 0; j < n; j++)
  {
    if (j == y)
      continue;
    
    if (puzzle[x][j] == val)
      return false;
  }
  
  var sqx = Math.floor(x / 3) * 3, sqy = Math.floor(y / 3) * 3;
  
  for (var i = sqx; i < sqx + 3; i++)
    for (var j = sqy; j < sqy + 3; j++)
    {
      if (i == x && j == y)
        continue;
      
      if (puzzle[i][j] == val)
        return false;
    }
  
  
  
  
    
  return true;
}

function sudoku(puzzle) 
{
  var unsolved = [], n = puzzle[0].length;
  
  for (var i = 0; i < n; i++)
    for (var j = 0; j < n; j++)
    {
      if (puzzle[i][j] == 0)
        unsolved.push([i, j]);
    }
    
  var m = unsolved.length;  
    
  for (var i = 0; i < m;)
  {
    var x = unsolved[i][0],
        y = unsolved[i][1];
        
    while (true)
    {
      puzzle[x][y]++;
      
      if (puzzle[x][y] == 10)
      {
        puzzle[x][y] = 0;
        i--;
        break;
      }
    
      var res = checkSolution(x, y, puzzle);
      
      if (res)
      {
        i++;
        break;
      }
    }
        
  }
  
  return puzzle;
}