# TypeScript Interview Questions and Answers
### Provide an example of using union and intersection types in TypeScript.
In TypeScript, we can use **Union (`|`)** and **Intersection (`&`)** types.### ✅ Union Types (`|`)
- When we need to choose one type, either A1 or B1, we can use union types because it allows a variable or object to match either of several types.

  #### Example:
  
  ```ts
  type A1 = {
    a1: number;
    a2: number;
  };
  
  type B2 = {
    b1: number;
    b2: number;
  };
  
  type AorB = A1 | B2;
  // here we can choose A1 or B2 
  
  // ✅ Valid: using B2 structure
  // its valid because it have all property of B2
  const union1: AorB = { b1: 3, b2: 3 };
  
  // ✅ Valid: using A1 structure
  // its valid because it have all property of A1
  const union2: AorB = { a1: 3, a2: 3 };
  
  // ❌ Not valid: mixing properties from both A1 and B2
  const union3: AorB = { a1: 2, b1: 3 };
  
  // ✅ Valid because extra fields can be added if the object satisfies one of the types
  const union4: AorB = { a1: 2, b1: 3, b2: 3 };

  type AandB = A1 & B2;
  
- When we need to combine multiple types, like a variable that has both A1 and B1 at the same time, we can use Intersection, because it allows combining multiple types. 
   #### Example:
  
  ```ts
  
  // here we have to provide all propertis of A1 and B2
  // ✅ Valid: all properties from both A1 and B2
  const intersection1: AandB = { a1: 3, a2: 3, b1: 3, b2: 3 };
  
  // ❌ Not valid: missing a2 from A1
  const intersection2: AandB = { a1: 3, b1: 3, b2: 3 };
  
  // ❌ Not valid: missing a1 and a2 from A1
  const intersection3: AandB = { b1: 3, b2: 3 };

