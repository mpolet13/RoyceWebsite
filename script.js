document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul li a.active').classList.remove('active');
        this.classList.add('active');
    });
});
