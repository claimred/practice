//Task codewars id: 56a1c074f87bc2201200002e
/* Task codewars description: Write
```javascript
function smaller(arr)
```
```python
smaller(arr)
```
```ruby
smaller(arr)
```
```coffeescript
smaller(arr)
```
that given an array ```arr```, you have to return the amount of numbers that are smaller than ```arr[i]``` to the right.

For example:
```javascript
smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]
```
```python
smaller([5, 4, 3, 2, 1]) == [4, 3, 2, 1, 0]
smaller([1, 2, 0]) == [1, 1, 0]
```
```ruby
smaller([5, 4, 3, 2, 1]) == [4, 3, 2, 1, 0]
smaller([1, 2, 0]) == [1, 1, 0]
```
```coffeescript
smaller([5, 4, 3, 2, 1]) == [4, 3, 2, 1, 0]
smaller([1, 2, 0]) == [1, 1, 0]
```
``` haskell
smaller [5,4,3,2,1]  `shouldBe` [4,3,2,1,0]
smaller [1,2,3]      `shouldBe` [0,0,0]
smaller [1, 2, 0]    `shouldBe` [1, 1, 0]
```
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version <a href = 'http://www.codewars.com/kata/56a1c63f3bc6827e13000006'>How many are smaller than me II?</a>
*/

'use strict';

//Wrote red black trees implementation hoping to solve how-many-are-smaller-than-me II
//It didn't work, but it solves I so here it goes

var ColorEnum = {
  RED: 0,
  BLACK: 1
};

class RBNode
{
  constructor(data)
  {
    this.data = data;
  }
}


RBNode.prototype.parent = null;
RBNode.prototype.num = 0;
RBNode.prototype.left = null;
RBNode.prototype.right = null;
RBNode.prototype.color = ColorEnum.RED;


class RBTree
{
  constructor(comp)
  {    
    this._comp = comp
    this._root = null;
    this._nodes = 0;        
  }
  
  init(n)
  {
    this.bulk = new Array(n);
    
    for (var i = 0; i < n; i++)
    {
      this.bulk[i] = new RBNode(0);
    }
  }
  
  _constructNode(data)
  {
    this._nodes++;
    
    this.bulk[this._nodes - 1].data = data;
    
    return this.bulk[this._nodes - 1];
  }
  
  _normalInsert(node) 
  {        
    if (this._root == null)
    {      
      this._root = node;
      node.color = ColorEnum.BLACK;
      node.num = 1;
      return 0;
    }
    
    var root = this._root;
    var res = 0;
    
    while (root != null)
    {
      if (this._comp(root, node))
      {        
        if (root.left == null)
        {
          node.parent = root;
          node.num = 1;
          root.left = node;
          root.num++;
          break;
        }
        else
        {
          root.num++;
          root = root.left;
        }
      }
      else
      {
        res += this._num(root.left);
        
        if (root.data != node.data)
          res++;
        
        if (root.right == null)
        {
          node.parent = root;
          node.num = 1;
          root.right = node;
          root.num++;
          break;
        }
        else
        {
          root.num++;
          root = root.right;          
        }
      }
    }
    
    return res;
  }
  
  _num(x)
  {
    if (x == null)
      return 0;
    
    return x.num;
  }
  
  _rotateLeft(x)
  {       
   var y = x.right;
    
    if (y == null)
      return;
    
    if (x.data == y.data)
      return;
    
    
    var B = y.left;
        
    var xnum, ynum;

    ynum = this._num(x.left) + this._num(y.left) + this._num(y.right) + 2;    
    xnum = this._num(x.left) + this._num(y.left) + 1;    
        
    x.right = B;
    
    if (B != null)
      B.parent = x;
    
    y.left = x;
    y.parent = x.parent;
    
    if (x.parent == null)
      this._root = y;
    else
    {
      if (x.parent.left == x)
        x.parent.left = y; 
      else
        x.parent.right = y; 
    }
    
    x.parent = y;
    
    x.num = xnum;
    y.num = ynum;
    
  }
  
  _rotateRight(y)
  {             
     var x = y.left;
    
    if (x == null)
      return;
    
    if (x.data == y.data)
      return;
    
    
    var B = x.right;

    var xnum, ynum;

    xnum = this._num(x.left) + this._num(x.right) + this._num(y.right) + 2;    
    ynum = this._num(x.right) + this._num(y.right) + 1;    
    
    y.left = B;
    
    if (B != null)
      B.parent = y;
    
    x.right = y;
    x.parent = y.parent;
    
    if (y.parent == null)
      this._root = x;
    else
    {
      if (y.parent.left == y)
        y.parent.left = x;
      else
        y.parent.right = x;
    }
    
    y.parent = x;    
    
    x.num = xnum;
    y.num = ynum;
    
  }
  
  _fix(x)
  {
    x.color = ColorEnum.RED;
    
    while (x != this._root && x.parent.color == ColorEnum.RED)
    {
      if (x.parent == x.parent.parent.left)
      {
        var y = x.parent.parent.right;
        
        var ycolor;
        
        if (y == null)
        {
          ycolor = ColorEnum.BLACK;
        }
        else
          ycolor = y.color;
        
        if (ycolor == ColorEnum.RED)
        {
          x.parent.color = ColorEnum.BLACK;
          y.color = ColorEnum.BLACK;
          x.parent.parent.color = ColorEnum.RED;
          
          x = x.parent.parent;          
        }
        else
        {
          if (x == x.parent.right)
          {
            x = x.parent;
            
            this._rotateLeft(x);
          }
          
          x.parent.color = ColorEnum.BLACK;
          x.parent.parent.color = ColorEnum.RED;
          this._rotateRight(x.parent.parent);
        }
      }
      else
      {
        var y = x.parent.parent.left;
        
        if (y == null)
        {
          ycolor = ColorEnum.BLACK;
        }
        else
          ycolor = y.color;
        
        if (ycolor == ColorEnum.RED)
        {
          x.parent.color = ColorEnum.BLACK;
          y.color = ColorEnum.BLACK;
          x.parent.parent.color = ColorEnum.RED;
          
          x = x.parent.parent;          
        }
        else
        {
          if (x == x.parent.left)
          {
            x = x.parent;
            
            this._rotateRight(x);
          }
          
          x.parent.color = ColorEnum.BLACK;
          x.parent.parent.color = ColorEnum.RED;
          this._rotateLeft(x.parent.parent);
        }
      }
    }
    
    this._root.color = ColorEnum.BLACK;
  }
  
  insert(data)
  {
    var node = this._constructNode(data);
    
    node.color = ColorEnum.RED;
    
    var res = this._normalInsert(node);
    this._fix(node);    
    
    return res;
  }
}

function smaller(arr) 
{
  //print(arr);
  var tree = new RBTree(function (a, b) { 
    if (a.data > b.data) 
      return true; 
    else 
      return false; });
    
  var len = arr.length;  
  
  tree.init(len);  
    
  var res = [];
    
  for (var i = len - 1; i >= 0; i--)
    res[i] = tree.insert(arr[i]);
  
  return res;
}