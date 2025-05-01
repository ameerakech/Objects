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
   



//QUESTION THREE
//Create a function with student as a function name
//
function Student(name,scores){
this.name = name
this.scores = scores
this.average = average

this.hasPassed = function(){
if 
}
}


//QURSTION THREE

