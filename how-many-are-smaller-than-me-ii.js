//Task codewars id: 56a1c63f3bc6827e13000006
/* Task codewars description: This is a hard version of <a href = 'http://www.codewars.com/kata/56a1c074f87bc2201200002e'>How many are smaller than me?</a>. If you have troubles solving this one, have a look at the easier kata first.

Write
```javascript
function smaller(arr)
```
that given an array ```arr```, you have to return the amount of numbers that are smaller than ```arr[i]``` to the right.

For example:
```javascript
smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller(1, 2, 0) === [1, 1, 0]
```*/

function _merge(arr, ind, p, q, r, count)
{
  var i = p, j = q + 1,
      tmp = 0,
      n = r - p + 1;
      newind = new Array(n);
  
  var k = 0;
  
  while (i <= q && j <= r)
  {
    if (arr[ind[i]] <= arr[ind[j]])
    {
      count[ind[i]] += tmp;
      newind[k++] = ind[i++]; 
    }
    else
    {
      tmp++;
      newind[k++] = ind[j++]
    }
  }
  
  while (i <= q)
  {
    count[ind[i]] += r - q;
    newind[k++] = ind[i++]; 
  }
  
  while (j <= r)
    newind[k++] = ind[j++];
  
  for (var i = 0; i < n; i++)
    ind[p + i] = newind[i];
}

/* stable property of sorting algorithm is ESSENTIAL */ 
function mergeSort(arr, ind, p, r, count)
{
  if (arr.length == 1)
    return;
  
  if (p < r)
  {
    var q = Math.floor((p + r) * 0.5);
    
    mergeSort(arr, ind, p, q, count);
    mergeSort(arr, ind, q + 1, r, count);
    
    _merge(arr, ind, p, q, r, count);
  }
}

function smaller(arr)
{
  var indices = [], res = [];
  
  for (var i = 0; i < arr.length; i++)
  {
    indices.push(i);
    res.push(0);
  }
  
  mergeSort(arr, indices, 0, arr.length - 1, res);
  
  return res;
}