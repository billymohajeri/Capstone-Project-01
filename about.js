function hideMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.about-body').style.filter = '';
}

function showMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'block';
  document.querySelector('.about-body').style.filter = 'blur(5px)';
}

const ham = document.getElementById('ham');
const x = document.getElementById('x');
ham.addEventListener('click', showMobileMenu());
x.addEventListener('click', hideMobileMenu());
