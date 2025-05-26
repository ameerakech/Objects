// // QUESTION ONE 

function BankAccount(userName, balance) {
  this.userName = userName
  this.balance = balance
  this.deposit = function (amount) {
    this.balance += amount
    console.log(`${this.userName} your new balance is ${this.balance}`)
  }



  this.withdraw = function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.userName} withdrew ${amount} your new balance is ${this.balance}`)
      return this.balance
    }
    else {
      console.log(`${this.userName} withdrew ${amount}new balance is ${this.balance} which is insuffient`)

    }
  }
}
const firstAccount = new BankAccount("firstAccount", 2000)
const secondAccount = new BankAccount("secondAccount", 500)
const thirdAccount = new BankAccount("thirdAccount", 350)

firstAccount.deposit(200)
firstAccount.withdraw(2100);

secondAccount.deposit(400)
secondAccount.withdraw(300)

thirdAccount.deposit(200)
thirdAccount.withdraw(300)
console.log("=============================")

// QUESTION TWO

const taskList = {
  tasks: [],

  addTask: function (task) {
    this.tasks.push(task);
    console.log("Added task: " + task);
  },

  completeTask: function (task) {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      console.log("Completed task: " + task);
    }
    else {
      console.log('Task ${task} not found ');

    }
  },

  listTasks: function () {
    console.log("Tasks left:", this.tasks);
  }
};

taskList.addTask("Do exercises");
taskList.addTask("Go hiking");
taskList.addTask("Learn a language");
taskList.addTask("sleep early");

taskList.completeTask("Go hiking");

taskList.listTasks();
console.log("=======================================")


//  QUESTION THREE

function Student(name, scores) {
  this.name = name;
  this.scores = scores;
  this.average = function () {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    return sum / this.scores.length
  };
  this.hasPassed = function () {
    if (this.average() >= 50) {
      return true
    }
    else {
      return false
    }
  }
}
let student1 = new Student("John", [78, 80])
let student2 = new Student("Jane", [45.34])

console.log(`${student1.name} has an average of: ${student1.average()}`);
console.log(`${student1.name} has passed: ${student1.hasPassed()}`);
console.log(`${student2.name} has an average of: ${student2.average()}`);
console.log(`${student2.name} has passed: ${student2.hasPassed()}`);


console.log("============================================")

// QUESTION FOUR

const ShoppingCart = {
  items: [],

  addItem: function (item) {
    this.items.push(item);
    console.log(`Added ${item.name} bought with ${item.price} shillings to cart`)
  },

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0)

  }
}

ShoppingCart.addItem({ name: "books", price: 20 });
ShoppingCart.addItem({ name: "Pens", price: 30 });
ShoppingCart.addItem({ name: "Scissors", price: 50 });

console.log("Total cost: $" + ShoppingCart.getTotal());
console.log("==================================================")

//QUESTION FIVE

function Movie(title, year, rating) {
  this.title = title;
  this.year = year;
  this.rating = rating;
  this.isClassic = function () {
    return this.year < 2000
  }


  this.isRecommend = function () {
    if (this.rating > 8) {
      console.log(`Highly recommended!`)
    }
    else {
      console.log(`Not highly recommended`)
    }
  }
}
let firstMovie = new Movie("The Originals", 2014, 5);
let secondMovie = new Movie("Outpost", 2023, 9);
let thirdMovie = new Movie("Dragons", 2012, 8);

console.log(firstMovie.isClassic());
firstMovie.isRecommend()
console.log(secondMovie.isClassic());
secondMovie.isRecommend()
console.log(thirdMovie.isClassic());
thirdMovie.isRecommend()

