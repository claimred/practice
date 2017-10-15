//Task codewars id: 5254620499cfe504bf0001c9
/* Task codewars description: Robby, the robot, wants to find his way back home. Unfortunately his power is pretty low, so he needs to find the shortest way from his Start point (S) to the Target cell (T).

When Robby starts, he always looks into north direction. He has a limited command set and each command costs him 1 unit of power. The commands are:
```javascript
Commands = {
  "TURN_RIGHT": "r", // turn right by 90°
  "TURN_LEFT": "l", // turn left by 90°
  "MOVE_FORWARDS": "f" // move one field forwards into current direction
};
```

The field, Robby is moving on, is defined by a string, which may have different dimensions, but is always squared.

Example for a 3x3 field:
```javascript
field = 'S.......T';
// which means:
field =
  'S..' +
  '...' +
  '..T';
```

Each cell of the field is described by a character:
```javascript
Fields = {
  "WALKABLE": ".", // Robby may walk on this
  "BLOCKED": "#", // Robby must not walk on this
  "START": "S", // Robby is starting here, he may also walk here
  "TARGET": "T" // The target cell, Robby has to reach
};
```

Your task is to write a function, which returns the list of commands, Robby has to do in order to reach the target cell and save as much power as possible. If Robby is not able to reach the target with the remaining power, the function should return an empty list.

Example:
```javascript
getCommands('T.S.', 5); // -> ['f'], because he just has to move forward
getCommands('S.......T', 10); // -> ['r', 'f', 'f', 'r', 'f', 'f']
getCommands('S.......T', 5); // -> [], because he needs at least 6 units of power
getCommands('S#.##...T', 20); // => [], because the target can not be reached (with an arbitrary amount of power)
```

Additional notes:

- There is exactly one Start point (S)
- There is exactly one Target point (T)
- Each test case has exactly one solution (= only one shortest command list)*/

function getTurns(dir1, dir2)
{
  var v1, v2, v3;
  
  v1 = [-dir1[1], dir1[0]];
  v2 = [-dir1[0], -dir1[1]];
  v3 = [dir1[1], -dir1[0]];
  
  if (dir2[0] == v1[0] && dir2[1] == v1[1])
    return "r";
  
  if (dir2[0] == v2[0] && dir2[1] == v2[1])
    return "rr";
  
  if (dir2[0] == v3[0] && dir2[1] == v3[1])
    return "l";
  
  return ""; 
}

//manhattan should work, euclidean obviously shouldn't
function disth(a, b)
{
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);  
}

function getCommands(field, power)
{
  var n = Math.floor(Math.sqrt(field.length)),
      start = { x: -1, y: -1, t: -1, d: -1 }, end = { x: -1, y: -1, t: -1, d: -1 },
      parents = [], dist = [];
  
  for (var i = 0; i < n; i++)
    for (var j = 0; j < n; j++)
    {
      if (field[j * n + i] == 'S')
      {
        start.x = i;
        start.y = j;
      }
      
      if (field[j * n + i] == 'T')
      {
        end.x = i;
        end.y = j;
      }
      
      parents[j * n + i] = null;      
      dist[j * n + i] = 10000; //d - inf
    }
  
  var queue = [],
      dir = [ [1, 0], [0, 1], [-1, 0], [0, -1] ];
  
  var found = false;
  
  queue.push(start);
  dist[start.y * n + start.x] = 0;
  
  while (queue.length > 0)
  {
    var p = queue.pop();
    
    if (p.x == end.x && p.y == end.y)
    {
      found = true;
      break;
    }
    
    for (var i = 0; i < 4; i++)
    {
      var c = { x: p.x + dir[i][0], y: p.y + dir[i][1], t: 0, d: 10000 }; // d - infinity
      
      if (c.x >= 0 && c.y >= 0 && c.x < n && c.y < n 
          && field[c.y * n + c.x] != "#")
      {
        var pparent = parents[p.y * n + p.x];                        
       
        if (pparent == null)
          dir1 = [0, -1];
        else
          dir1 = [p.x - pparent.x, p.y - pparent.y];
        
        dir2 = [c.x - p.x, c.y - p.y];
                
        var h;               
        
        h = getTurns(dir1, dir2).length + disth(c, end);
        
        if (h < dist[c.y * n + c.x])
        {
          c.d = h;
          
          parents[c.y * n + c.x] = p;
          dist[c.y * n + c.x] = h;
          
          queue.push(c);
        }                     
      }
    }
    
    queue.sort(function(a, b) 
      { 
        if (a.d > b.d)
          return -1;
        
        else
          return 1;
      });
  }
  
  var p = end, res = [];
  
  if (found)
  {
    while (true)
    {
      res.push(p);
      
      var pp = parents[p.y * n + p.x];
      
      if (pp == null)
        break;
      
      p = pp;
    }
  }
  
  var ans = [];
  
  var cur_dir = [0, -1];
  
  for (var i = res.length - 1; i > 0; i--)
  {
    var diff = [ res[i - 1].x - res[i].x,
                 res[i - 1].y - res[i].y ]; 
                 
    if (diff[0] == cur_dir[0] && diff[1] == cur_dir[1])
      ans.push('f');
    else
    {
      var t = getTurns(cur_dir, diff);
      
      t.split("").forEach(function(el) { ans.push(el); })
            
      cur_dir = diff;
      ans.push('f');
    }
  }
  
  if (ans.length > power)
    return [];    
  
  return ans;
}