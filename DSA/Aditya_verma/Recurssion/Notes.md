### Hypothesis

- Analyse what whould be the structure of function and what your function return.

- Example

```
  height(n) -> number
  factorial(n) -> number
```

### Induction

- Apply the logic for smaller input

```javascript
  left -> height(root.left);
  right -> height(root.right)
  max(left,right) +1;
```

### Base condition

- Write all the base conditions
- Think of smallest valid input

- Example
  inside factorial funtion

```javascript
if (n === 1) return 1;
if (n < 1) return;
```

### **_IBH method is very usefull in tree and linkedlist case._**
