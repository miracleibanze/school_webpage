const dropIcon = document.querySelector('.menuIcon');

dropIcon.addEventListener('click',() => {
    let dropMenu = document.querySelector('.hyperlink-part');

    if (dropMenu.classList.contains('menuShow')){
        dropMenu.classList.remove('menuShow');
        dropIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }
    
    else{
        dropMenu.classList.add('menuShow');
        dropIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }
});




const video = document.querySelector('.draw-intro');

babyeyi.addEventListener('click',() => {
    let video = document.querySelector('.about-video');

    if (video.classList.contains('show')){
        video.classList.remove('show');

    }
    
    else{
        video.classList.add('show');
    }

});


const classChoice = document.querySelectorAll('.class-choice');

classChoice.addEventListener('click', () => {
    let choosedClass = document.querySelectorAll('.studies-submenu');
    
    if (choosedClass.classList.contains('.studies-submenu-show')){
        choosedClass.classList.remove('.studies-submenu-show');
    }
    else{
        choosedClass.classList.add('.studies-submenu-show');
    }
});



