var tab = document.querySelectorAll('.tab');
var view = document.querySelectorAll('.view');
var tabContainer = document.querySelector('.tab-container');

tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i] === e.target) {
        tab[i].classList.add('active');
      } else {
        tab[i].classList.remove('active');
      }
    }
    var data = e.target.getAttribute('data-view');
    for (let i = 0; i < view.length; i++) {
      if (view[i].getAttribute('data-view') !== data) {
        view[i].classList.add('hidden');
      } else {
        view[i].classList.remove('hidden');
      }
    }
  }
});
