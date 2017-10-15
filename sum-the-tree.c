//Task codewars id: 5800580f8f7ddaea13000025
/* Task codewars description: Given a node object representing a binary tree:

````
Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
````

In C++:
````
struct node
{
  int value;
  node* left;
  node* right;
}
````

write a function that returns the sum of all values, including the root.

Examples:
````
10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3
````*/

#define N_MAX 1000

struct node
{
  int value;
  struct node* left;
  struct node* right;
};

typedef struct stack
{
  struct node *data[N_MAX];
  int len;
} stack;

int isempty( stack *s )
{
   if (s->len == 0)
      return 1;

   return 0;
}

void push( stack *s, struct node *val )
{
   s->data[s->len++] = val;
}

int pop( stack *s, struct node **val )
{
   if (s->len == 0)
      return 0;

   *val = s->data[s->len-- - 1];
   return 1;
}

void initStack( stack *s )
{
   s->len = 0;

   for (int i = 0; i < N_MAX; i++)
      s->data[i] = 0;
}

int sumTheTreeValues(struct node* root)
{
   int sum = 0;
   stack s;

   initStack(&s);

   s.len = 0;

   push(&s, root);

   while (!isempty(&s))
   {
      struct node *cur;
      pop(&s, &cur);

      sum += cur->value;

      if (cur->left != 0)
         push(&s, cur->left);

      if (cur->right != 0)
         push(&s, cur->right);
   }

  return sum;
}