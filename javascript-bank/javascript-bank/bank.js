/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance) === true) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var match = null;
  for (let i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      match = this.accounts[i];
    }
  }
  return match;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (let i = 0; i < this.accounts.length; i++) {
    var current = this.accounts[i];
    total += current.getBalance();
  }
  return total;
};
