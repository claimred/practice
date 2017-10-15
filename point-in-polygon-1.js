//Task codewars id: 530265044b7e23379d00076a
/* Task codewars description: # The problem

In this kata, you're going write a function called `pointInPoly` to test if a point is inside a polygon. 

Points will be represented as `[x,y]` arrays.

The polygon will be an array of points which are the polygon's vertices. The last point in the array connects back to the first point.

You can assume:

1. The polygon will be a valid [simple polygon](https://en.wikipedia.org/wiki/Simple_polygon). That is, it will have at least three points, none of its edges will cross each other, and exactly two edges will meet at each vertex.

2. In the tests, the point will never fall exactly on an edge of the polygon.

# Testing

To help you visualize your test cases, the `showAndTest(poly,point,inside)` function is preloaded. It draws the polygon and point and then calls `Test.expect` automatically.

So if you call:

    showAndTest([[-5, -5], [5, -5], [0, 5]], [0,0], true)

then you'll see:

<div style="background:white; width:140px"><svg width="140" ,="" height="140"><polygon points="20.5,20.5 120.5,20.5 70.5,120.5" stroke="blue" fill="white"></polygon><circle cx="70" cy="70" r="2" fill="green"></circle></svg></div>

The drawing window is 14x14 units wide and centered at the origin.*/