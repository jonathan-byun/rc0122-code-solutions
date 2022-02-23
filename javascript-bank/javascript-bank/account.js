/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (deposit.amount > 0 && Number.isInteger(deposit.amount) === true) {
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  if (withdrawal.amount > 0 && Number.isInteger(withdrawal.amount) === true) {
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var total = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      total += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      total -= this.transactions[i].amount;
    }
  }
  return total;
};
