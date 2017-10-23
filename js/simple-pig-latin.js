//Task codewars id: 520b9d2ad5c005041100000f
/* Task codewars description: Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

```javascript
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
```
```ruby
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
```
```python
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
```
```csharp
Kata.PigIt("Pig latin is cool"); // igPay atinlay siay oolcay
```*/

String.prototype.rotateUnit = function() { 
  
  var n = this.length; 
  
  return this.substring(1, n) + this[0]; 
};

function pigIt(str)
{
  var t = str.split(" ");
  
  for (var i = 0; i < t.length; i++)
  {
    var p = t[i][0];
    
    t[i] = t[i].rotateUnit();
    
    t[i][t.length - 1] = p;
    
    t[i] += "ay";
  }  
  
  return t.join(" ");
}