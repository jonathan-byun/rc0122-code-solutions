var bulb = document.querySelector('.bulb-off');
var box = document.querySelector('.box-off');

function turn() {
  if (bulb.className === 'bulb-off') {
    bulb.className = 'bulb-on';
    box.className = 'box-on';
  } else {
    bulb.className = 'bulb-off';
    box.className = 'box-off';
  }
}

bulb.addEventListener('click', turn);
