const dropIcon = document.querySelector('.hamburger');

dropIcon.addEventListener('click', () => {
    const dropMenu = dropIcon.parentElement;

    if (dropMenu.classList.contains('active')) {
        dropMenu.classList.remove('active');
        dropIcon.innerHTML = "<img src='./../assets/hamburger.svg' alt='hamburger'>"
    }
    else {
        dropMenu.classList.add('active');
        dropIcon.innerHTML = "<img src='./../assets/x-tobe-sign.png' alt='hamburger'>"
    }
})