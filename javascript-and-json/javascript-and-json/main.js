var books = [
  {
    isbn: '1385',
    title: 'Javascript for Dummies',
    author: 'Harold Kumor'
  },
  {
    isbn: '1358',
    title: 'Dummies for Dummies',
    author: 'Richard Leslie'
  },
  {
    isbn: '3158',
    title: 'Big brains',
    author: 'Julia Roberts'
  }
];

console.log('Books:', books);
console.log('Type of Books is:', typeof (books));

var jsonString = JSON.stringify(books);
console.log('json string', jsonString);
console.log('json string type:', typeof (jsonString));

var student =
'{"name": "Harold","number id" : "13580"}';

console.log('student string', student);
console.log('student string type', typeof (student));

var studentObject = JSON.parse(student);
console.log('student object', studentObject);
console.log('student object type:', typeof (studentObject));
