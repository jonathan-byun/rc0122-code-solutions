var x = 5;
var y = 7;
var z = 9;
var maximumValue = Math.max(x, y, z);
console.log('Maximum Value:', maximumValue);

var heroes = ['Batman', 'Superman', 'Ironman', 'Spiderman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Javascript is cool',
    author: 'Alexander Hamilton'
  },
  {
    title: 'CSS for smarties',
    author: 'Brick Dupp'
  },
  {
    title: 'Be Me!',
    author: 'Duncan Chubb'
  }
];

var lastBook = library.pop();
console.log('Last Book:', lastBook);
var firstBook = library.shift();
console.log('First Book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library array:', library);

var fullName = 'Jonathan Byun';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('My Name:', sayMyName);
