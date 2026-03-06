const mainHeader = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        mainHeader.classList.add('fixed');
    } else {
        mainHeader.classList.remove('fixed');
    }
});
