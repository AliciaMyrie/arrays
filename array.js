console.log("Hello World");

/*
Create an array with a list of fruits starting with 3 fruit

with that array now do the following
- Add a new fruit to the end of the array
- Display the array
- Add a new fruit to the beginning of the array
- Display the array
- Remove the last fruit.
- Display the array
*/

let fruits = ["kiwi", "mango", "apple"];
fruits.push("plum");
console.log(...fruits);
console.log(fruits);

console.log("This is reg", fruits);
console.log("This is spread", ...fruits);

fruits.unshift("oranges");
console.log(fruits);

fruits.pop();
console.log(fruits);

//searched my name in the array

console.log(fruits.indexOf("Alicia"));

const chickenEgg = ["🐔", "🥚"].sort();
console.log(`The ${chickenEgg[0]} came first!`);

//FUNCTIONS

// Homework
function myFunction(x, y) {
    return x * y;
  }
  console.log(myFunction(10,5))

function petersAge(num1, num2) {
  console.log(num1 * num2);
}

const peteAge = function (num1, num2) {
  return num1 * num2;
};

let myfunction = (num1, num2) => {
  return num1 * num2;
};

petersAge(100, 5000000);
