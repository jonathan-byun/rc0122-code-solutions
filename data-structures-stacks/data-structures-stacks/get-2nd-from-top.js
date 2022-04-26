/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topValue = stack.pop();
  if (topValue === undefined) {
    return topValue;
  }
  const returnValue = stack.peek();
  stack.push(topValue);
  return returnValue;
}
