var $users = document.querySelector('#user-list');
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr2.responseType = 'json';
xhr2.addEventListener('load', function () {
  console.log('status of xhr2 object', xhr2.status);
  var response = xhr2.response;
  console.log('response of xhr2', response);
  for (let i = 0; i < response.length; i++) {
    var list = document.createElement('li');
    list.textContent = response[i].name;
    $users.appendChild(list);
  }
});
xhr2.send();
