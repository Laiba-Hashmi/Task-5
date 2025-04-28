console.log(`Welcome to our shop ! enjoy your shopping :)`);
let item = prompt("Which item do you want to buy?")
item = item.toLowerCase();
item = item.trim();
console.log(`item you buy : ${item}`);
let quantity = parseInt(prompt("Quantity of item you want to buy"))
console.log(`quantity of item : ${quantity}`);
let price = parseInt(prompt("Price of item you want to buy"))
console.log(`price of item : ${price}`);
let total = quantity*price
console.log(`Dear costumer! , you have purchased ${item} in ${quantity} quantity and price ${price} for each. Your subtotal is ${total}. `);