{


function formatString (input : string,toUppier?: boolean) : string {
    if(toUppier == true){
        const res : string = input.toUpperCase()
        return res;
    }
    else{
        return input
    }
}



type Books = {
    title:string;
    rating:number;
}
function filterByRating (items:{title: string; rating: number}[]):{title: string; rating: number}[]{
        return items.filter(item => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];






const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  for (const index of arrays) {
    for (const item of index) {
      result.push(item);
    }
  }
  return result;
};




class Vehicle {
  private make:string;
  private year:number;

  constructor(Make:string,Year:number,){
    this.make = Make;
    this.year = Year;
  }
  getInfo(){
    console.log(`Make: ${this.make}, Year: ${this.year}`)
  }

}
class Car extends Vehicle {
  model:string;
  constructor(Make:string,Year:number,model:string){
    super(Make,Year)
    this.model = model;
  }
  getModel(){
    console.log(`"Model: ${this.model}"`)
  }
}




function processValue(value: string | number): number {
    if(typeof value ==="string")
        return value.length
    else {
        return value*2
    }
    
}



interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  let max = products[0];
  for (const element of products) {
    if(element.price > max.price) {
        max = element;
    }
  }
  return max;
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];






enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  if (day == 0 || day ==1){
    return ("Weekday")
  }
  return ("Weekend")
    
}




async function squareAsync(n: number): Promise<number>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      if(n < 0){
        reject(new Error('Negative number not allowed'));
      }
        resolve(n*n) 
      },
    1000);
  }
)
}


}

