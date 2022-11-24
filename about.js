function hideMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.grid-container').style.filter = '';
}

function showMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'block';
  document.querySelector('.grid-container').style.filter = 'blur(5px)';
}

const ham = document.getElementById('ham');
const x = document.getElementById('x');
ham.addEventListener('click', showMobileMenu());
x.addEventListener('click', hideMobileMenu());
