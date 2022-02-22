function ExampleConstructor() {

}

console.log('ExmapleConstructor prototype property:', ExampleConstructor.prototype);
console.log('ExampleConstructor protoype property type of:', typeof ExampleConstructor.prototype);

var testObject = new ExampleConstructor();

console.log('testObject:', testObject);
console.log('Is examplecontructor in the prototype chain of test object?:', testObject instanceof ExampleConstructor);
