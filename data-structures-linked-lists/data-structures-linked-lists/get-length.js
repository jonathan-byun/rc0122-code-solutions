/* exported getLength */

function getLength(list) {
  let length = 1;
  while (list.next !== null) {
    length++;
    list = list.next;
  }
  return length;
}
