// assignment
// Variables
// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z);

// let
// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z);

// const
// const x = 5;
// const y = 6;
// const z = x + y;
// console.log(z);

// Arrow Function
// let hello = '';

// hello = () => {
//   return 'Hello World!';
// };
// console.log(hello());

// Arrow Function With Parameters:
// let hello = '';

// hello = (val) => 'Hello ' + val;
// console.log(hello('dog'));

// Arrow Function Without Parentheses:
// let hello = '';

// hello = val => 'Hello ' + val;
// console.log(hello('dog'));

// JavaScript Classes
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar1 = new Car('Ford', 2014);
// const myCar2 = new Car('Audi', 2019);
// console.log(myCar1.name + ' ' + myCar2.name);

// example 2
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const myCar = new Car('Ford', 2014);
// console.log('My car is ' + myCar.age() + ' years old.');

// Array
// Array length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);

// Array toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// Array at()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);

// Array join()
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.join(' * '));

// Array pop()
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.pop());
// console.log(fruits);

// Array push()
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.push('Kiwi'));
// console.log(fruits);

// Array shift()
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.shift());
// console.log(fruits);

// Array unshift()
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.unshift('Lemon'));
// console.log(fruits);

// Array length
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log((fruits[fruits.length] = 'Kiwi'));
// console.log(fruits);

// Array delete()
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log('The first fruit is: ' + fruits[0]);
// delete fruits[0];
// console.log('The first fruit is: ' + fruits[0]);

// Array concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// Array copyWithin()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(2,0));

// Array flat()
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// Array flatMap()
// const myArr = [1, 2, 3, 4, 5,6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);

// Array splice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// Array toSpliced()
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced);

// Array slice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// Destructuring
// Object Destructuring
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
// };

// // Destructuring
// let { firstName, lastName } = person;
// console.log(firstName + ' ' + lastName);

// Object Property Alias
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
//   };

//   // Destructuring
//   let {lastName : name} = person;
// console.log(name);

// String Destructuring
// let name = 'john';

// // Destructuring
// let [a1, a2, a3, a4, a5] = name;
// console.log(a3);

// Array Destructuring
// Create an Array
// const fruits = ['Bananas', 'Oranges', 'Apples', 'Mangos'];

// // Destructuring
// let [fruit1, fruit2] = fruits;
// console.log(fruit1 + ' ' + fruit2);

// Skipping Array Values
// Create an Array
// const fruits = ['Bananas', 'Oranges', 'Apples', 'Mangos'];

// // Destructuring
// let [fruit1, , , fruit2] = fruits;
// console.log(fruit1 + ' ' + fruit2);

// Array Position Values
// Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// const {[0]:fruit1 ,[1]:fruit2} = fruits;
// console.log(fruit1 + " " + fruit2);

// The Rest Property
// Create an Array
// const numbers = [10, 20, 30, 40, 50, 60, 70];

// // Destructuring
// const [a, b, ...rest] = numbers;
// console.log('a is ' + a + 'b is ' + b + 'the rest is ' + rest);

// Destructuring Maps
// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   // Destructing
//   let text = "";
//   for (const [key, value] of fruits) {
//     text += "<p>" + key + " is " + value;
//   }
//   console.log(text);

// Swapping JavaScript Variables
// let firstName = "John";
// let lastName = "Doe";

// // Destructing
// [firstName, lastName] = [lastName, firstName];
// console.log(firstName + " " + lastName);

// JavaScript Modules

// Ternary Operator
// Before:

// function renderApp() {
//   console.log('Welcome!');
// }

// function renderLogin() {
//   console.log('Please log in');
// }

// let authenticated = false;

// if (authenticated) {
//   renderApp();
// } else {
//   renderLogin();
// }

// after

// function renderApp() {
//     console.log("Welcome!");
//   }

//   function renderLogin() {
//     console.log("Please log in");
//   }

//   let authenticated = true;

//   authenticated ? renderApp() : renderLogin();

// Spread Operator
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// console.log(numbersCombined);
