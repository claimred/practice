//Task codewars id: 525f3eda17c7cd9f9e000b39
/* Task codewars description: This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```javascript
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

```ruby
seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
```

Requirements:

* There must be a function for each number from 0 ("zero") to 9 ("nine")
* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (`divided_by` in Ruby)
* Each calculation consist of exactly one operation and two numbers
* The most outer function represents the left operand, the most inner function represents the right operand*/

function zero(x) 
{
  if (x == null)
    return 0;
  else
    return x(0);
}

function one(x)
{
  if (x == null)
    return 1;
  else
    return x(1);
}

function two(x) 
{ 
  if (x == null)
    return 2;
  else
    return x(2);
} 

function three(x) 
{ 
  if (x == null)
    return 3;
  else
    return x(3);
} 

function four(x) 
{ 
  if (x == null)
    return 4;
  else
    return x(4);
} 

function five(x) 
{ 
  if (x == null)
    return 5;
  else
    return x(5);
} 

function six(x) 
{ 
  if (x == null)
    return 6;
  else
    return x(6);
} 

function seven(x) 
{ 
  if (x == null)
    return 7;
  else
    return x(7);
} 

function eight(x) 
{ 
  if (x == null)
    return 8;
  else
    return x(8);
} 

function nine(x) 
{ 
  if (x == null)
    return 9;
  else
    return x(9);
} 

function plus(x)
{
  return function(y) { return x + y; };  
}

function minus(x)
{
  return function(y) { return y - x; };  
}

function times(x)
{
  return function(y) { return y * x; };  
}

function dividedBy(x)
{
  return function(y) { return y / x; };  
}