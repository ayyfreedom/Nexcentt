const menuIcon = document.querySelector('.fa-bars');
const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
});