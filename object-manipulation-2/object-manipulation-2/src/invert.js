/* exported invert */
function invert(source) {
  var newObject = {};
  var holder = '';
  for (let x in source) {
    holder = x;
    x = source[x];
    source[x] = holder;
    newObject[x] = source[x];
  }
  return newObject;
}
