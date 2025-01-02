function toggleMobileMenu() {
  const navLinks = document.getElementById('navLink');
  navLinks.classList.toggle('active');
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !subject || !message) {
    alert('All fields are required!');
    return;
  }

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('subject', subject);
  localStorage.setItem('message', message);

  alert('Form submitted successfully!');
  form.reset();
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('name').value = localStorage.getItem('name') || '';
  document.getElementById('email').value = localStorage.getItem('email') || '';
  document.getElementById('subject').value = localStorage.getItem('subject') || '';
  document.getElementById('message').value = localStorage.getItem('message') || '';
});