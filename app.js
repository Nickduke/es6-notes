// ES6 Notes

// Closures
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
const bob = newAccount('bob', 200);
john.showBalance();
john.deposit(400);
john.deposit(800);
john.withdraw(100);
john.withdraw(2000);
