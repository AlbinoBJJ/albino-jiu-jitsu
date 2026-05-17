document.addEventListener('DOMContentLoaded', () => {
    
    // --- Comportamento da Navbar Mobile ---
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.getComputedStyle(menuToggle).display !== 'none') {
                    bsCollapse.hide();
                }
            });
        });
    }

    // --- Animação Suave das Seções ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.lineage-card, .schedule-clean-card, .price-box').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(25px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(element);
    });
});