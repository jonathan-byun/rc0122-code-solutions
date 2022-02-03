/* exported getKeys */
// define function getkeys with 1 parameter object
// do not use object.keys method
// set new var to empty array
// use for in loop to iterate through keys
// push keys into new array defined before loop
// return array
function getKeys(object) {
  var keys = [];
  for (const x in object) {
    keys.push(x);
  }
  return keys;
}
