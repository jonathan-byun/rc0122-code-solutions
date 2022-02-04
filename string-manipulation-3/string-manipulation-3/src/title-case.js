/* exported titleCase */
function titleCase(title) {
  var capitalTitle = '';
  var word = '';
  var omit = [' '];
  var minor = ['and', ' or', 'nor', 'and', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (let i = 0; i < title.length; i++) {
    if (omit.indexOf(title[i]) === -1) {
      word += title[i];
    }
    if (title[i] === ' ') {
      word = word.toLowerCase();
      if (word === 'javascript') {
        capitalTitle += 'JavaScript ';
        word = '';
      } else if (word === 'javascript:') {
        capitalTitle += 'JavaScript: ';
        word = '';
      } else if (word === 'api') {
        capitalTitle += 'API ';
        word = '';
      } else if (minor.indexOf(word) === -1 || i - word.length === 0 || title[i - (word.length + 2)] === ':') {
        for (let u = 0; u < word.length; u++) {
          if (u === 0) {
            capitalTitle += word[u].toUpperCase();
          } else if (word[u - 1] === '-') {
            capitalTitle += word[u].toUpperCase();
          } else {
            capitalTitle += word[u];
          }
        }
        capitalTitle += ' ';
        word = '';
      } else {
        capitalTitle += word;
        word = '';
        capitalTitle += ' ';
      }
    } else if (i === title.length - 1) {
      word = word.toLowerCase();
      if (word === 'api') {
        capitalTitle += 'API';
        word = '';
      } else if (minor.indexOf(word) === -1) {
        for (let z = 0; z < word.length; z++) {
          if (z === 0) {
            capitalTitle += word[z].toUpperCase();
          } else {
            capitalTitle += word[z];
          }
        }
        word = '';
      }
      capitalTitle += word;
      word = '';
    }
  }
  return capitalTitle;
}
