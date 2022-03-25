const takeAChance = require('./take-a-chance');
const myPromise = takeAChance('Jonathan');
myPromise.then(value => {
  console.log(value);
}, reason => {
  console.log(reason.message);
});
