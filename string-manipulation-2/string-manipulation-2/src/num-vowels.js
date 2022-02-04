/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  for (let i = 0; i < string.length; i++) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if (vowels.indexOf(string[i]) !== -1) {
      counter++;
    }
  }
  return counter;
}
