var contact = document.querySelector('#contact-form');
var data = {};
contact.addEventListener('submit', function (event) {
  event.preventDefault();
  data.name = contact.elements.name.value;
  data.email = contact.elements.email.value;
  data.text = contact.elements.message.value;
  console.log(data);
  contact.reset();
});
