window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("load-finish");
})




const dropIcon = document.querySelector('.hamburger');
const dropMenu = dropIcon.parentElement;

dropIcon.addEventListener('click', () => {

    if (dropMenu.classList.contains('active')) {
        dropMenu.classList.remove('active');
        dropIcon.innerHTML = "<img src='../assets/hamburger.svg' alt='hamburger'>"
    }
    else {
        dropMenu.classList.add('active');
        dropIcon.innerHTML = "<img src='../assets/x-tobe-sign.png' alt='X-icon'>"
    }
})

window.onscroll = () => {
    const imageCard = document.querySelector('.libraryToggle');
    if (dropMenu.classList.contains('active')) {
        dropMenu.classList.remove('active')
        dropIcon.innerHTML = "<img src='../assets/hamburger.svg' alt='hamburger'>"
    }
    if (imageCard.classList.contains('show')) {
        imageCard.classList.remove('show')
    }
}


function handleImageToggle(index){
    
    const imageCard = imageToggle.parentElement;
    const imageContainer = document.querySelector('.libraryImage-container')

    imageCard.classList.add('show');
    imageContainer.classList.add('ml'+index)

}
const imageToggle = document.querySelector('.libraryToggleclose');

imageToggle.addEventListener('click', () => {
    const imageCard = imageToggle.parentElement;
    const imageContainer = document.querySelector('.libraryImage-container')
    imageCard.classList.remove('show');
    if (imageContainer.classList.contains('ml1')){
        imageContainer.classList.remove('ml1')
    }
    else if (imageContainer.classList.contains('ml2')) {
        imageContainer.classList.remove('ml2')
    }
    else if (imageContainer.classList.contains('ml3')) {
        imageContainer.classList.remove('ml3')
    }
    else if (imageContainer.classList.contains('ml4')) {
        imageContainer.classList.remove('ml4')
    }
    else if (imageContainer.classList.contains('ml5')) {
        imageContainer.classList.remove('ml5')
    }
    else if (imageContainer.classList.contains('ml6')) {
        imageContainer.classList.remove('ml6')
    }
    else if (imageContainer.classList.contains('ml7')) {
        imageContainer.classList.remove('ml7')
    }
    else {
        imageContainer.classList.remove('ml8')
    }
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_wpb2ogc', 'template_z3ck8c9', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});
