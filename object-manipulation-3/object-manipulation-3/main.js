console.log('Lodash is loaded:', typeof _ !== 'undefined');
var player1 = { name: 'Jon', hand: [] };
var player2 = { name: 'Luke', hand: [] };
var player3 = { name: 'Dave', hand: [] };
var player4 = { name: 'Ben', hand: [] };
var players = [player1, player2, player3, player4];
var suits = ['clubs', 'spades', 'hearts', 'diamonds'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'king', 'queen', 'ace'];
var deckPlacement = 0;
var cards = {};
for (let i = 0; i < suits.length; i++) {
  for (let u = 0; u < ranks.length; u++) {
    cards[deckPlacement] = { suit: suits[i], rank: ranks[u] };
    deckPlacement++;
  }
}
var holder = {};
var random = 0;
for (let i = 0; i < 52; i++) {
  random = Math.floor(Math.random() * 51);
  holder = cards[random];
  cards[random] = cards[i];
  cards[i] = holder;
}
var cardspassed = 0;
var handsize = 2;
for (let i = 0; i < players.length; i++) {
  for (let u = 0; u < handsize; u++) {
    players[i].hand.push(cards[cardspassed]);
    cardspassed++;
  }
}
var winner = '';
var facecards = ['jack', 'king', 'queen', 'ace'];
var handstrength = 0;
var winninghand = 0;
for (let i = 0; i < players.length; i++) {
  for (let u = 0; u < handsize; u++) {
    var currentcard = players[i].hand[u];
    if (facecards.indexOf(currentcard.rank) !== -1) {
      if (currentcard === 'ace') {
        handstrength += 11;
      } else {
        handstrength += 10;
      }
    } else {
      handstrength += currentcard.rank;
    }
  }
  if (handstrength > winninghand) {
    winner = players[i].name;
    winninghand = handstrength;
  }
  handstrength = 0;
}
console.log(players);
console.log(winner);
