/* exported getStudentNames */
function getStudentNames(students) {
  var x = [];
  for (let i = 0; i < students.length; i++) {
    x.push(students[i].name);
  }
  return x;
}
