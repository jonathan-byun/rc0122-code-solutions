/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (list.next === null) return;
  const newNode = new LinkedList(value);
  newNode.next = list.next;
  list.next = newNode;
}
