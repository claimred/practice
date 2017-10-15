//Task codewars id: 55911ef14065454c75000062
/* Task codewars description: This is the first part. You can solve the second part <a href="https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript">here</a> when you are done with this.
Multiply two numbers! Simple!

1. The arguments are passed as strings.
2. The numbers may be way very large
3. Answer should be returned as a string
4. The returned "number" should not start with zeros e.g. 0123 is invalid

Note: 100 randomly generated tests!*/

function addition(a, b)
{
  if (a.length < b.length)
  {
    var c = b;
    
    b = a;
    a = c;
  }
  
  var an = a.length, bn = b.length,  
      res = new String(),
      k = 0, c, t1 = 0, t = 0;  
 
  while (true)
  {
    var aval = 0, bval = 0;
    
    aval = parseInt(a[an - 1 - k]);
    
    if (k < bn)
      bval = parseInt(b[bn - 1 - k]);
    
    var c = aval + bval + t, t1;      
    
    t = Math.floor(c / 10);
    t1 = c % 10
      
    res = String.fromCharCode(48 + t1) + res;
      
    k++;
    
    if (k == a.length)
      break;
  }
  
  if (t != 0)
    res = t.toString() + res;  
  
  return res;  
}

function _multiplyUnit(a, u)
{
  var uval = parseInt(u), t = 0, t1, res = new String();
  
  for (var i = 1; i <= a.length; i++)
  {
    var aval = parseInt(a[a.length - i]);
    
    var c = aval * uval + t;
    
    t = Math.floor(c / 10);
    t1 = c % 10;
    
    res = t1.toString() + res;
  }
  
  if (t != 0)
    res = t.toString() + res;
  
  return res;
}

function multiply(a, b)
{
  if (a.length < b.length)
  {
    var c = b;
    
    b = a;
    a = c;
  }
  
  var an = a.length, bn = b.length, partial = [], res = "0";
  
  for (var i = 1; i <= b.length; i++)
  {
    var cur = _multiplyUnit(a, b[b.length - i]);
    
    for (var j = 0; j < i - 1; j++)
      cur += "0";
    
    res = addition(res, cur);
  }
  
  var i = 0;
  
  while (res[i] == "0")
    i++;
  
  if (i == res.length)
    return "0";
  else
    return res.slice(i);
}