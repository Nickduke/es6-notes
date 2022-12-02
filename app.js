// // ES6 Notes

// /////// Closures /////
// function newAccount(name, initalBalance) {
//   // no one has access to the balance - only once they set up the account and use our designed methods
//   let balance = initalBalance;
//   function showBalance() {
//     // console.log(`Hey ${name}, your balance is: ${balance}`);
//   }
//   function deposit(amount) {
//     balance += amount;
//     showBalance();
//   }
//   function withdraw(amount) {
//     if (amount > balance) {
//       // console.log(`Hey, ${name}, insufficient funds`);
//       return;
//     }
//     balance -= amount;
//     showBalance();
//   }
//   // creating showBalance, deposit, and withdraw as methods as opposed to independent functions
//   return { showBalance, deposit, withdraw };
// }
// const john = newAccount('john', 300);
// // const bob = newAccount('bob', 200);
// john.showBalance();
// john.deposit(400);
// john.deposit(800);
// john.withdraw(100);
// john.withdraw(2000);

// /////// Arrow functions /////
// // const sayHi = () => console.log('hello');
// // sayHi();

// const double = (value) => value * 2;
// const num = double(4);
// // console.log(num);

// // two params
// const multiply = (num1, num2) => {
//   const result = num1 * num2;
//   return result;
// };
// const sum = multiply(4, 6);
// // console.log(sum);

// // return object
// const object = () => ({
//   name: 'john, age: 25',
// });
// const person = object();
// // console.log(person);

// // arrow functions as callback functions
// const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number) => number > 2);
// // console.log(big);

// // reg function: 'this' arefers to parent, left of the '.'
// // arrow function: refers to it's current surrounding scope
// // const bob = {
// //   firstName: 'bob',
// //   lastName: 'smith',
// //   sayName() {
// //     // console.log(this);
// //     setTimeout(() => {
// //       // console.log(this);
// //       // console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
// //     }, 2000);
// //   },
// // };
// const anna = {
//   firstName: 'anna',
//   lastName: 'sanders',
//   sayName: () => {
//     // console.log(this);
//     // console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };
// // bob.sayName();
// // anna.sayName();

// // points to button
// // const btn = document.querySelector('.btn');
// // btn.addEventListener('click', function () {
// //   this.style.color = 'black';
// // });

// // will throw error as 'this' is referencing the window object
// // const btn = document.querySelector('.btn');
// // btn.addEventListener('click', () => {
// //   this.style.color = 'black';
// // });

// // will work as this arrow function is pointing to the btn
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   setTimeout(() => {
//     this.style.color = 'black';
//   }, 2000);
// });

// // default param will default to the assigned value if nothing is passed in when called
// // Can call the function before the function declaration when using reular function as it is hoisted to the top, whereas with arrow functions, the function must be declared prior to it being invoked
// const sayHello = (person = 'Susan') => {
//   // outputs 'hello susan'
//   // console.log(`hello ${person}`);
// };
// sayHello();

// /////// Array destructuring /////
// // faster/easier way to access/unpack and assign values from arrays
// const fruits = ['orange', 'banana', 'lemon'];
// const friends = ['john', 'peter', 'kelly'];

// // standard way
// const orange = fruits[0];

// // destructuring
// // ,, to skip value (skipping peter)
// const [j, , kelly] = friends;
// console.log(j, kelly);

// // swap variables
// let first = 'bob';
// let second = 'john';

// [second, first] = [first, second];
// // console.log(first);

// /////// Object destructuring /////
// const rick = {
//   first: 'rick',
//   last: 'henry',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };

// const {
//   first: firstName,
//   last,
//   city,
//   zip,
//   siblings: { sister },
// } = rick;
// console.log(firstName, last, city, zip, sister);

// /////// Destructuring function params /////
// const rick = {
//   first: 'rick',
//   last: 'henry',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };

// function printPerson({ first, last, city, siblings: { sister } }) {
//   console.log(first, last, city, sister);
// }

// printPerson(rick);

// // /////// For of loop /////
// // loops through the values of an iterble object
// // unlike forEach, we can use break, continue

// const fruits = ['apple', 'orange', 'banana', 'peach'];
// const longName = 'John Smith Pepper III';
// let shortName = '';

// for (const letter of longName) {
//   // console.log(letter);
//   if (letter === ' ') {
//     continue;
//   } else {
//     shortName += letter;
//   }
// }
// // console.log(shortName);

// for (const fruit of fruits) {
//   if (fruit === 'banana') {
//     break;
//     // continue;
//   }
//   // console.log(fruit);
// }

// // // /////// Spread Operator /////
// // Allows an iterable to spread/expand indivdually inside a receiver
// // Split into single items and copy them

// // arrays
// const udemy = 'udemy';
// const letters = [...udemy];
// // console.log(letters);

// const boys = ['john', 'peter', 'bob'];
// const girls = ['susan', 'anna', 'sara'];
// const bestFriend = 'arnold';

// const friends = [...boys, ...girls, bestFriend];
// // console.log(friends);

// const newFriends = [...friends];
// // console.log(newFriends);

// // objects
// const person = { name: 'john', job: 'developer' };
// const newPerson = { ...person, city: 'toronto', name: 'peter' };
// // console.log(newPerson);
// // console.log(person);

// // dom elements
// const headings = document.querySelectorAll('h1');
// const result = document.getElementById('result');
// const text = [...headings]
//   .map((item) => `<span>${item.textContent}</span>`)
//   .join(' ');
// result.innerHTML = text;

// // functions and arguments
// const numbers = [23, 45, 66, 88, 2345];
// // console.log(Math.max(...numbers));

// const john = ['john', 'sanders'];
// const sayHello = (name, lastName) => {
//   // console.log(`Hello ${name} ${lastName}`);
// };

// sayHello(...john);

// // // // /////// Rest Operator /////
// // gathers/collects the items

// // arrays
// const fruit = ['apple', 'orange', 'lemon'];
// // const [first, second, ...rest] = fruit;
// // console.log(first, second, rest);

// // objects
// const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const { job, ...rest } = person;
// // console.log(job, rest);

// const testScores = [78, 90, 100, 90, 99, 65];

// // function params
// const getAverage = (name, ...scores) => {
//   // console.log(name, scores);
//   let total = 0;
//   for (const score of scores) {
//     total += score;
//   }
//   console.log(`${name}'s average score is ${total / scores.length}`);
// };

// getAverage(person.name, 78, 90, 100, 90);
// getAverage(person.name, ...testScores);

// // // // /////// Array.of, Array.from /////
// // not on the prototype
// // of creates a new Array instance from variable number of arguments
// const friends = Array.of('john', 10, true);
// // console.log(friends);

// // from returns Array object from any object with a length prop or iterable object
// // from turns array-like/ish into array (strings, nodeList, Set, etc)
// const udemy = 'udemy';
// // console.log(Array.from(udemy));

// function countTotal() {
//   // console.log(arguments);
//   let total = Array.from(arguments).reduce(
//     (total, currentNumber) => (total += currentNumber),
//     0
//   );
//   console.log(total);
// }
// countTotal(67, 89, 101);

// // DOM elements/nodeList
// // long way
// const p = document.querySelectorAll('p');
// const result = document.querySelector('#result');
// const second = document.querySelector('#second');

// let newText = Array.from(p);
// newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');

// result.innerHTML = newText;

// // best way
// // Array.from's second argument is essentially a map callback function
// const text = Array.from(document.querySelectorAll('p'), (item) => {
//   return `<span>${item.textContent}</span>`;
// }).join(' ');

// second.innerHTML = text;

// /////// Find, findIndex, every, some /////
// const people = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'peter' },
//   { id: 3, name: 'anna' },
// ];

// const grades = ['A', 'B', 'A', 'B', 'C'];
// const goodGrades = ['A', 'B', 'A', 'B'];

// //
// // long way
// // const anna = people.filter((person) => person.name === 'anna');
// // console.log(anna);
// // console.log(anna[0].name);
// // console.log(anna[0].id);
// // would have to do this
// // console.log(...anna);

// // find
// // // best way to access object only, not array
// // const anna = people.find((person) => person.name === 'anna');
// // console.log(anna);

// const person = people.findIndex((item) => item.id === 3);
// console.log(person);
// const newPeople = people.slice(0, person);
// console.log(newPeople);

// // every - every item in the array
// const allGoodGrades = goodGrades.every((grade) => grade !== 'C');
// console.log(allGoodGrades);

// // Some - at least one item
// const oneBadGrade = grades.some((grade) => grade === 'C');
// console.log(oneBadGrade);

// // /////// For in /////
// // for in loop - iterates over an object's properties
// // not advised to use on arrays, especially if the order is important
// // on array use for of loop instead
// const person = {
//   name: 'john',
//   age: 25,
//   status: 'student',
// };

// for (const propertyName in person) {
//   console.log(`${propertyName} : ${person[propertyName]}`);
// }

// // CONVERT OBJECTS INTO ARRAYS
// // Object.keys() - converts prop names into array
// const keys = Object.keys(person);
// console.log(keys);

// // Object.values() - converts prop values into array
// const values = Object.values(person);
// console.log(values);

// // Object.entries() - converts both
// const result = Object.entries(person);
// console.log(result);

// // map method
// const newResult = result.map((item) => {
//   const [first, second] = item;
//   return first;
// });

// console.log(newResult);

// // for of
// for (const item of result) {
//   const [first, second] = item;
//   console.log(first, second);
// }

// // // /////// Set object  /////
// // stores a collection of uniwue values of any type
// // new Set()
// // iterators
// // entries(), keys(), values(), forEach()

// const unique = new Set();

// // add(value)
// // will only store one value since they are not unique
// unique.add('first');
// unique.add('first');
// console.log(unique);

// // delete(value)
// // false due to value not existing
// const result = unique.delete('third');
// console.log(result);

// // clear()
// // removes all items from set
// unique.add('second');
// console.log(unique);

// unique.clear();
// console.log(unique);

// // has(value
// // check whether ir not item is in the set and returns boolean value
// const isValue = unique.has(4);
// console.log(isValue);

// // new Set() - accepts iterable object
// const products = [
//   {
//     title: 'high-back bench',
//     company: 'ikea',
//   },
//   {
//     title: 'albany table',
//     company: 'marcos',
//   },
//   {
//     title: 'accent chair',
//     company: 'caressa',
//   },
//   {
//     title: 'wooden table',
//     company: 'ikea',
//   },
// ];

// // const companies = products.map((item) => item.company);
// // console.log(companies);

// // const uniqueCompanies = new Set(companies);
// // console.log(uniqueCompanies);

// // const finalCompanies = [...uniqueCompanies, 'other store'];
// // console.log(finalCompanies);

// // one liner
// const result = ['all', ...new Set(products.map((item) => item.company))];
// console.log(result);

// // // // /////// includes()  /////
// // checks if a string contains another string (case sensitive)
// const products = [
//   {
//     title: 'high-back bench',
//     company: 'ikea',
//   },
//   {
//     title: 'albany table',
//     company: 'marcos',
//   },
//   {
//     title: 'accent chair',
//     company: 'caressa',
//   },
//   {
//     title: 'wooden table',
//     company: 'ikea',
//   },
// ];
// // string includes
// // // const firstName = 'john';
// // // const result = firstName.includes('peter');
// // // console.log(result);

// // const product = {
// //   title: 'high-back bench',
// // };
// // const result = product.title.includes('high');
// // console.log(result);

// const text = 'oo';

// const filteredProducts = products.filter((product) =>
//   product.title.includes(text)
// );

// console.log(filteredProducts);

// // array inclues
// // check if item is in array
// // useful in conditional statements
// const groceries = ['milk', 'bread', 'meat'];
// let randomItem = 'milk';
// const isIncluded = groceries.includes(randomItem, 1);
// // false because we are starting the check at the 1st index and milk's index is 0
// console.log(isIncluded);

// // // // // /////// Async js  /////
// // make soup
// // boil water 10min
// // chop carrots
// // add carrots to boil for 5mins
// // chop onion
// // add onion to boil for 5mina
// // BROWSER fetch data, get GeoLocation, setTimeout, setTimer, etc

// // setTimeout for async behaviour
// // callback hell
// boilWater();
// console.log('chop carrots');

// function boilWater() {
//   console.log('boiling...');
//   setTimeout(() => {
//     console.log('done');
//     console.log('add carrots');
//     setTimeout(() => {
//       console.log('carrots are done');
//       console.log('add onion');
//       setTimeout(() => {
//         console.log('onion done');
//       }, 5000);
//     }, 5000);
//     console.log('chop onion');
//   }, 10000);
// }

// // callbacks, promises, async/await
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

// // have been using async all along
// btn.addEventListener('click', () => {
//   // console.log('you clicked the button');
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//       setTimeout(() => {
//         heading3.style.color = 'blue';
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });
// // runs first
// // console.log(`I am second`);

// Promises - pending, resolved, rejected
// then catch - pass another callback
// think of promise as a receipt - you pay then they give you a reciept, promising you your food upon completion
btn.addEventListener('click', () => {
  const promise = new Promise((resolve, reject) => {
    let value = true;
    if (value) {
      resolve('hey value is true');
    } else {
      reject(`there was an error, value is false`);
    }
  });
  promise
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
