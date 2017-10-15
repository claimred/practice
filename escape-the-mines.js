//Task codewars id: 5326ef17b7320ee2e00001df
/* Task codewars description: A poor miner is trapped in a mine and you have to help him to get out !

Only, the mine is all dark so you have to tell him where to go.

In this kata, you will have to implement a method `solve(map, miner, exit)` that has to return the path the miner must take to reach the exit as an array of moves, such as : `['up', 'down', 'right', 'left']`. There are 4 possible moves, `up`, `down`, `left` and `right`, no diagonal.

`map` is a 2-dimensional array of boolean values, representing squares. `false` for walls, `true` for open squares (where the miner can walk). It will never be larger than 5 x 5. It is laid out as an array of columns. All columns will always be the same size, though not necessarily the same size as rows (in other words, maps can be rectangular). The map will never contain any loop, so there will always be only one possible path. The map may contain dead-ends though.

`miner` is the position of the miner at the start, as an object made of two zero-based integer properties, x and y. For example `{x:0, y:0}` would be the top-left corner.

`exit` is the position of the exit, in the same format as `miner`.

Note that the miner can't go outside the map, as it is a tunnel.

Let's take a pretty basic example :

```javascript
var map = [[true, false],
    [true, true]];
    
solve(map, {x:0,y:0}, {x:1,y:1});
// Should return ['right', 'down']
```
```python
map = [[True, False],
    [True, True]];
    
solve(map, {'x':0,'y':0}, {'x':1,'y':1})
// Should return ['right', 'down']
```
```ruby
map = [[true, false],
    [true, true]];
    
solve(map, {'x'=>0,'y'=>0}, {'x'=>1,'y'=>1})
# Should return ['right', 'down']
```
```haskell
let map = [[True, False],
           [True, True]]
    
solve map (0,0) (1,1)
-- Should return [R, D]
```*/

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};

function getDirName(a, b)
{
  if (a.x - b.x < 0)
    return "left";
  
  if (a.x - b.x > 0)
    return "right";
  
  if (a.y - b.y < 0)
    return "up";
  
  if (a.y - b.y > 0)
    return "down";
}

function solve(map, miner, exit)
{
  var queue = new Queue(), dir = [ [1, 0], [0, 1], [-1, 0], [0, -1] ], 
      visited = new Array(map.length);
  
  for (var i = 0; i < map.length; i++)
    visited[i] = new Array(map[0].length);
  
  for (var i = 0; i < map.length; i++)
    for (var j = 0; j < map[0].length; j++)
      visited[i][j] = { f: false, parent: { x: -1, y: -1 } };
  
  queue.enqueue(miner);
  
  while (queue.size() > 0)
  {
    var p = queue.dequeue();
    
    visited[p.x][p.y].f = true;        
    
    if (p.x == exit.x && p.y == exit.y)
      break;
    
    for (var i = 0; i < 4; i++)
    {
      var n = { x: p.x + dir[i][0], y: p.y + dir[i][1] };
      
      if (n.x >= 0 && n.x < map.length && n.y >= 0 && n.y < map[0].length)
        if (map[n.x][n.y] && !visited[n.x][n.y].f)
        {
          queue.enqueue(n);    
          visited[n.x][n.y].parent.x = p.x;
          visited[n.x][n.y].parent.y = p.y;          
        }
    }    
  }
  
  var n = exit, ans = [], p;
  
  while (true)
  {
    p = visited[n.x][n.y].parent;
    
    if (p.x == -1 && p.y == -1)
      break;
    
    ans.push(getDirName(n, p));
    n = p;
  }
  
  ans.reverse();
  
  return ans;
}