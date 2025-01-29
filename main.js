let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


let evenNumbers = [];
let oddNumbers = [];


for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evenNumbers.push(array[i]); 
  } else {
    oddNumbers.push(array[i]);  
  }
}


console.log("Четные числа:", evenNumbers);
console.log("Нечетные числа:", oddNumbers);
