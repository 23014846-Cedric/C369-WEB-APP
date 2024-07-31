document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a.nav-link');

    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop();
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (currentPage === linkPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    

    navLinks.forEach(link => link.addEventListener('click', setActiveLink));

    setActiveLink(); // Set active link on page load
});

