const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const option = document.querySelector('.header .nav-bar .nav-list ul');
const navigation = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    option.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if(scroll_position>200) {
        navigation.style.backgroundColor = '#010b10'
    } else {
        navigation.style.backgroundColor = 'transparent'
    }
});