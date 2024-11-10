const navbar = document.getElementById('navbar');


function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}


window.addEventListener('scroll', handleScroll);