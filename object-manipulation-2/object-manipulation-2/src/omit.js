/* exported omit */
// define function, omit, which takes two parameters, 'object' 'keys'
// define a variable, newObject, and assign it an empty object
// define a for in loop, to iterate through each key in parameter object
// define an if statement which uses the indexOf method on the keys object with an argument of x equaling -1 && that object at x property does not equal undefined
// if true then assign value at object[x] to newObject[x]
function omit(object, keys) {
  var newObject = {};
  for (const x in object) {
    if (keys.indexOf(x) === -1 && object[x] !== undefined) {
      newObject[x] = object[x];
    }
  }
  return newObject;
}
