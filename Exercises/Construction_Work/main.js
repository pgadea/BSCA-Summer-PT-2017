function Account(balance){
  this.balance = balance;
  this.debits = 0;
  this.credits = 0;


  ver self = this;
  this.deposit = function deposit(amount){
    self.balance += amount;
    self.credits += amount;

  }
}

var testAccount = new Account(5000);



class Bank{
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getFunds(){
    return this.b
  }
  setFunds(funds){
    this.c = funds
  }
}
