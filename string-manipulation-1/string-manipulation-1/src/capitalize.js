/* exported capitalize */
function capitalize(word) {
  var done = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    done += word[i].toLowerCase();
  }
  return done;
}
