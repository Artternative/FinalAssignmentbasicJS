// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice() {
  // เริ่มเขียนโค้ดตรงนี้
  let total = cart.reduce((acc, cur) => {
    let sum;
    // console.log(acc);
    return (sum = acc + cur.price * cur.quantity);
  }, 0);
  return total;
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
  // { name: "ore", price: 2, quantity: 5 }
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
