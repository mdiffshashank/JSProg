## ***It is most important to visualize the problem*** ##

Dynamic programing is devided into two parts 

- Memoization 
- Tabulation

pattern of overlapping with sub problem is known as Dynamic Programming.

## ***Steps*** 

### ***Memoization recipe*** ###

1. Make it work with brute force.
    - visualize a problem as a tree.
    - figure out if any repitation
    - implement a tree using recursion.
    - tree leave node as a base case for recursion.
    - test it.

2. Make it efficient.
    - add a memo object.
    - memo object have unique key(arguments of function) and calculated values
    - add base case to return memo values
    - store return values in memo
    - return that memo object from function
    - make sure the memo object is shared in all your recurssive calls


- try to frame question with very small inputs first.

Programs 
---------------------------

1. Write a function `fib(n)` that takes in a number as a argument.The function should return the nth number of the fibonacci sequence. The 1st and 2nd number of the sequence is 1.To generate the next number of the sequence, we sum the previous two.
---`fibo.js`

2. Say that you are a traveler on a 2D grid. you begin in the top left corner and your goal is to travel to the bottom-right corner. you may only move down or right.In how many ways can travel to the goal on a grid with dimension m*n ?
--- `gridTravarsal.js`