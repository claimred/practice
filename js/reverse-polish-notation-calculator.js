//Task codewars id: 52f78966747862fc9a0009ae
/* Task codewars description: Your job is to create a calculator which evaluates expressions in [Reverse Polish notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

For example expression `5 1 2 + 4 * + 3 -` (which is equivalent to `5 + ((1 + 2) * 4) - 3` in normal notation) should evaluate to `14`.

Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. `1   3 +` expression is valid, but `1 3+` isn't.

Empty expression should evaluate to `0`.

Valid operations are `+`, `-`, `*`, `/`.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).*/

function doOp(a, b, op)
{
  a = parseFloat(a);
  b = parseFloat(b);
  
  if (op == '+')
    return a + b;
  
  if (op == '-')
    return a - b;
  
  if (op == '*')
    return a * b;
  
  if (op == '/')
    return a / b;
  
}

function calc(expr) {
  
  var operators = [ '-', '+', '*', '/' ], stack = [];
  
  if (expr === undefined || expr.length == 0)
    return 0;
  
  expr = expr.split(" ");  
  
  for (var i = 0; i < expr.length; i++)
  {
    if (operators.indexOf(expr[i]) >= 0)
    {
      var a = stack.pop(), b = stack.pop();
      
      stack.push(doOp(b, a, expr[i]));      
    }
    else
      stack.push(expr[i]);
  }
  
  return parseFloat(stack.pop());
}