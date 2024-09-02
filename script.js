window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("load-finish");
})


const dropIcon = document.querySelector('.hamburger');
const dropMenu = dropIcon.parentElement;

dropIcon.addEventListener('click', () => {

    if (dropMenu.classList.contains('active')) {
        dropMenu.classList.remove('active');
        dropIcon.innerHTML = "<img src='assets/hamburger.svg' alt='hamburger'>"
    }
    else {
        dropMenu.classList.add('active');
        dropIcon.innerHTML = "<img src='assets/x-tobe-sign.png' alt='hamburger'>"
    }
})

window.onscroll = () => {
    if (dropMenu.classList.contains('active')) {
        dropMenu.classList.remove('active')
        dropIcon.innerHTML = "<img src='assets/hamburger.svg' alt='hamburger'>"
    }
}
