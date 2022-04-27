/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const thirdNode = list.next.next;
  const secondNode = list.next;
  secondNode.next = list;
  list.next = thirdNode;
  return secondNode;
}
