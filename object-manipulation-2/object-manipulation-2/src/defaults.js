/* exported defaults */
// define function, defaults, with two parameteres, 'target' 'source'
// define for in loop, to iterate through the keys of the source parameter
// in the loop, define an if statement to be true if value at x property of object target is undefined
// if true, assign the value of x property at source object to x property at target object
function defaults(target, source) {
  for (const x in source) {
    if (target[x] === undefined) {
      target[x] = source[x];
    }
  }
}
