const navigationHeight = document.querySelector('.nav__container').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight+ 122 + "px");

const navLinkEls = document.querySelectorAll('.navbar__card');
const textLinkEls = document.querySelectorAll ('.nav-text');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        navLinkEls.forEach(el => el.classList.remove('active'));
        navLinkEl.classList.add('active');
        
        const logoImg = navLinkEl.querySelector('.logo');
        const newLogoSrc = navLinkEl.getAttribute('.data-logo');
        if (logoImg && newLogoSrc) {
          logoImg.src = newLogoSrc;
        }
    });
});

