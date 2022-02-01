function convertMinutesToSecond(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('Minutes to seconds:', convertMinutesToSecond(5));

function greet(name) {
  var greeting = 'Hello ' + name;
  return greeting;
}
console.log('Greeting:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('Area is:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('First Name is:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
console.log('Last Element in the array is:', getLastElement(['propane', 'and', 'propane', 'accessories']));
