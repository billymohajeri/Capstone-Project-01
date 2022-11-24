// function showMobileMenu() {
//   document.querySelector(".mobile-menu").style.display = "block";
//   document.querySelector(".grid-container").style.display = "none";
//   document.querySelector(".menu-footer").style.display = "block";
//   document.querySelector(".toolbar").style.display = "none";
// }

function hideMobileMenu() {
  document.querySelector(".mobile-menu").style.display = "none";
  document.querySelector(".grid-container").style.display = "grid";
  document.querySelector('.grid-container').style.filter = '';
  document.querySelector(".menu-footer").style.display = "none";
  document.querySelector(".toolbar").style.display = "flex";
}

ham.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "block";
//   document.querySelector(".grid-container").style.display = "none";
document.querySelector('.grid-container').style.filter = 'blur(5px)';
  document.querySelector(".menu-footer").style.display = "block";
//   document.querySelector(".toolbar").style.display = "none";
});
x.addEventListener("click", hideMobileMenu());
