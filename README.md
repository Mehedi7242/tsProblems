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


### How does TypeScript help in improving code quality and project maintainability?
- Currently, I’m learning TypeScript, and I will share my own opinion. From my experience with JavaScript, when we declare a variable, function, array, object we don’t declare its type, and it’s dynamically typed in JS. But in TS, we have to define its type explicitly. Though I faced problems with the syntax, the advantages are greater than the syntax issues once I became used to it.

  #### Example:
    
    ```ts
    // For example:
    const name = "Mehedi";
    
    // In TypeScript, we can define the type:
    const nameTS: string = "Mehedi";
    
    // We can also declare the type of an array, whether it will be a string or number array:
    const arr: number[] = [2, 34, 5];
    
    // TypeScript shows us errors before running the code because it performs type checking at compile time.
    
    type ObjType = {
      id: number;
      name: string;
      age: number;
    };
    
    const obj1: ObjType = {
      id: 232,
      name: "Mehedi",
      age: 23,
    };
    
    console.log(obj1);
    
    // In this case, if we declare a type, we also get autocomplete suggestions, which improves the developer experience.

### Explain the difference between any, unknown, and never types in TypeScript.
-  In TypeScript, we can use the "any" type, which allows us to store anything in a variable—like a string, number,      or object.We also have the "unknown" type. It works similarly to "any". We also have the "never" type.We cant use     never type in varibale of array we can use it inside a function .Which function will return never .
-  
  #### Example:

    
    ```ts
    // any type
    const value: any = "afaf";
    const value1: any = 323;
    const value2: any = {};
    
    if (value1 === "number") {
      console.log(value1);
    }
    console.log(value);
    
    //unknown type
    // It also disables type checking.
    
    const val1: unknown = 1;
    const val2: any = 2;
    console.log(val2);
    
    // never type
    // We also have the "never" type.
    const neverVal: never = "name";
    // This shows an error: Type '"name"' is not assignable to type 'never'.


