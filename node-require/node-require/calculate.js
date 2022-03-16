const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operator = process.argv[3];
const x = parseFloat(process.argv[2]);
const y = parseFloat(process.argv[4]);

switch (operator) {
  case 'add':
    console.log(add(x, y));
    break;
  case 'minus':
    console.log(subtract(x, y));
    break;
  case 'times':
    console.log(multiply(x, y));
    break;
  case 'divide':
    console.log(divide(x, y));
    break;
}
