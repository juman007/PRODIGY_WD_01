document.addEventListener('DOMContentLoaded', function () {
    const navIcon = document.querySelector('.nav-icon');
    const navMenu = document.querySelector('.header-navigation ul');

    navIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show-menu');
    });
});





