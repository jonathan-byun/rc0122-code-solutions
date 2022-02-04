/* exported zip */
// define new function, zip, with two parameters 'first' and 'second'
// define new variable, zipArray, and assign it an empty array of an empty array
// define new variable, holder, and assign it an empty array
// define new for loop to iterate through the shorter of the length of the first and second array parameters
// in the loop push the value of array first at index i to holder
// push the value of array second at index i to holder
// assign zipArray at index i the value of array holder
// outside the loop return zipArray
function zip(first, second) {
  var zipArray = [[]];
  var holder = [];
  for (let i = 0; i < first.length && i < second.length; i++) {
    holder.push(first[i]);
    holder.push(second[i]);
    zipArray[i] = holder;
    holder = [];
  }
  return zipArray;
}
