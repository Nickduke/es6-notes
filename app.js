// ES6 Notes

/////// Closures /////
function newAccount(name, initalBalance) {
  // no one has access to the balance - only once they set up the account and use our designed methods
  let balance = initalBalance;
  function showBalance() {
    // console.log(`Hey ${name}, your balance is: ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      // console.log(`Hey, ${name}, insufficient funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  // creating showBalance, deposit, and withdraw as methods as opposed to independent functions
  return { showBalance, deposit, withdraw };
}
const john = newAccount('john', 300);
// const bob = newAccount('bob', 200);
john.showBalance();
john.deposit(400);
john.deposit(800);
john.withdraw(100);
john.withdraw(2000);

/////// Arrow functions /////
// const sayHi = () => console.log('hello');
// sayHi();

const double = (value) => value * 2;
const num = double(4);
// console.log(num);

// two params
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};
const sum = multiply(4, 6);
// console.log(sum);

// return object
const object = () => ({
  name: 'john, age: 25',
});
const person = object();
// console.log(person);

// arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number) => number > 2);
// console.log(big);

// reg function: 'this' arefers to parent, left of the '.'
// arrow function: refers to it's current surrounding scope
// const bob = {
//   firstName: 'bob',
//   lastName: 'smith',
//   sayName() {
//     // console.log(this);
//     setTimeout(() => {
//       // console.log(this);
//       // console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }, 2000);
//   },
// };
const anna = {
  firstName: 'anna',
  lastName: 'sanders',
  sayName: () => {
    // console.log(this);
    // console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};
// bob.sayName();
// anna.sayName();

// points to button
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   this.style.color = 'black';
// });

// will throw error as 'this' is referencing the window object
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   this.style.color = 'black';
// });

// will work as this arrow function is pointing to the btn
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  setTimeout(() => {
    this.style.color = 'black';
  }, 2000);
});

// default param will default to the assigned value if nothing is passed in when called
// Can call the function before the function declaration when using reular function as it is hoisted to the top, whereas with arrow functions, the function must be declared prior to it being invoked
const sayHello = (person = 'Susan') => {
  // outputs 'hello susan'
  // console.log(`hello ${person}`);
};
sayHello();

/////// Array destructuring /////
// faster/easier way to access/unpack and assign values from arrays
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'kelly'];

// standard way
const orange = fruits[0];

// destructuring
// ,, to skip value (skipping peter)
const [j, , kelly] = friends;
console.log(j, kelly);

// swap variables
let first = 'bob';
let second = 'john';

[second, first] = [first, second];

console.log(first);
