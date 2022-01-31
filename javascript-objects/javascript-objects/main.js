var student = {
  firstName: 'Jonathan',
  lastName: 'Byun',
  age: 24
};
var fullName = student.firstName + ' ' + student.lastName;

console.log('Full name is:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'EMT';
console.log('Student lives in Irvine:', student.livesInIrvine);
console.log('Student\'s previous job:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2021'
};
vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('The color of the vehicle:', vehicle['color']);
console.log('Is the vehicle convertible?', vehicle['isConvertible']);
console.log('Vehicle Object:', vehicle);

var pet = {
  name: 'Walnut',
  type: 'Mutt'
};
delete pet.name;
delete pet.type;
console.log('Pet Object:', pet);
