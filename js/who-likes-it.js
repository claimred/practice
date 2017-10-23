//Task codewars id: 5266876b8f4bf2da9b000362
/* Task codewars description: You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function `likes :: [String] -> String`, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

```haskell
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
```
```csharp
Kata.Likes(new string[0]) => "no one likes this"
Kata.Likes(new string[] {"Peter"}) => "Peter likes this"
Kata.Likes(new string[] {"Jacob", "Alex"}) => "Jacob and Alex like this"
Kata.Likes(new string[] {"Max", "John", "Mark"}) => "Max, John and Mark like this"
Kata.Likes(new string[] {"Alex", "Jacob", "Mark", "Max"}) => "Alex, Jacob and 2 others like this"
```

For more than 4 names, the number in `and 2 others` simply increases.*/

function likes(names) 
{
  if (names.length == 0)
    return "no one likes this";
  
  if (names.length == 1)
    return names[0] + " likes this";
  
  if (names.length == 2)
    return names[0] + " and " + names[1] + " like this";
  
  if (names.length == 3)
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  
  if (names.length > 3)
  {
    var ret;
    
    ret = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    
    return ret;
  }  
}