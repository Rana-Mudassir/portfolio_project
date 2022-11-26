const btn = document.querySelector('.main_btn');

function on() {
  document.getElementById('layer').style.display = 'block';
  document.body.style.overflowY = 'hidden';
}
btn.addEventListener('click', on);

// const btn2 = document.querySelector('style-li');

// function off() {
//   document.getElementById('layer').style.display = 'none';
//   document.body.style.overflowY = 'scroll';
// }

// btn2.addEventListener('click', off);

// Form validation
const userEmail = document.querySelector('#email');
const alertMsg = document.querySelector('.alert-Msg');
const contactForm = document.querySelector('.contactForm');
contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = userEmail.value;
  if (regex.test(emailContent)) {
    alertMsg.innerHTML = 'Your email address should be lower case';
    event.preventDefault();
  }
});