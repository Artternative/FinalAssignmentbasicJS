// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
console.log(inventory);
// 1 try
// let newpd = {orange: {price:20 , quantity:300} }
// inventory.newpd = newpd
// console.log(inventory);
// 2 try
 let newPrd = {price:20,quantity:300};
inventory.orange = newPrd
console.log(inventory);
// 1 try 
// let sum1 = inventory.apple.price * inventory.apple.quantity
// let sum2 = inventory.banana.price * inventory.banana.quantity
// let sum3 = inventory.orange.price * inventory.orange.quantity
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// let sum = sum1 + sum2 + sum3 
// 2 try 
   let sum = Object.values(inventory).reduce((acc,cur) => {
    //  console.log(cur);
    let cr = cur.price*cur.quantity
     console.log(cr);
    return acc + cr
    // return acc + (cur.price*cur.quantity);
   },0);
  console.log(`Total inventory value: ${sum}`)

