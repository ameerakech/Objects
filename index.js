//QUESTION ONE 
//pseudocode
// create a bank account withfunction that will take in name and balance
//Add a method deposit ehich takes in an amount

function BankAccount(userName, balance){
    this.userName = userName
    this.balance = balance  
    this.deposit = function(amount){
    this.balance += amount
       console.log(`${this.userName} your new balance is ${this.balance}`)
    }
    
}

    this.widthdraw = function(amount){
    if (amount <= this.balance){
        this.balance -= amount;
        console.log(`${this.userName} withdrew ${amount}your new balance is ${this.balance}`)
        return this.balance 
    }
    else{
        console.log(`${this.userName} withdrew ${amount}new balance is ${this.balance} which is insuffient`)
        
    }
}
   const firstAccount = new BankAccount("Mary", 2000)
   const secondAccount = new BankAccount("John", 500)
   const thirdAccount = new BankAccount("Benson",350) 

    firstAccount.deposit(200)
    firstAccount.withdraw(2100)

    secondAccount.deposit(400)
    secondAccount.withdraw(300)

    thirdAccount.deposit(200)
    thirdAccount.withdraw(300)
   

    //QUESTION TWO

    const taskList = {
        tasks: [],
      
        addTask: function(task) {
          this.tasks.push(task);
          console.log("Added task: " + task);
        },
      
        completeTask: function(task) {
          let index = this.tasks.indexOf(task);
          if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Completed task: " + task);
          }
        },
      
        listTasks: function() {
          console.log("Tasks left:", this.tasks);
        }
      };
      
      taskList.addTask("Do exercises");
      taskList.addTask("Go hiking");
      taskList.addTask("Learn a language");
      taskList.addTask("sleep early");
      
      taskList.completeTask("Go hiking");
      
      taskList.listTasks();


      // QUESTION FOUR
      //Create an variable with an empty array 

      const ShoppingCart = {
        items: [],
      
        addItem: function(item) {
          this.items.push(item);
          console.log(`Added ${item.name} and ${item.price}to cart`)
        },
      
       getTotal(){
        return this.items.reduce(total,item)=>{
            total+item.price,0
       }
    
       }
    }
      
      ShoppingCart.addItem({ name: "books", price: 20 });
      ShoppingCart.addItem({ name: "Pens", price: 30 });
      ShoppingCart.addItem({ name: "Scissors", price: 50 });
      
      console.log("Total cost: $" + ShoppingCart.getTotal());


      //QUESTION FIVE
        //Create variables that will hold the movie names and then pass the items it takes in
        //WE ass a method isClassic then pass a condition 
      let firstMovie = new Movie("The Originals", 2014, 5);
      let secondMovie = new Movie("Outpost", 2023, 9);
      let thirdMovie= new Movie("Dragons", 2012, 8);
                 
       console.log(`"${firstMovie.title}" is classic movie: ${firstMovie.isClassic()}`);
      console.log(`Recommendation: ${firstMovie.recommend()}`);
      
              
      console.log(`"${secondMovie.title}" is classic movie: ${secondMovie.isClassic()}`);
      console.log(`Recommendation: ${secondMovie.recommend()}`);
      
              
      console.log(`"${thirdMovie.title}" is classic movie: ${thirdMovie.isClassic()}`);
      console.log(`Recommendation: ${thirdMovie.recommend()}`);
