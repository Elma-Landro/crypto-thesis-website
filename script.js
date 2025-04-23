// Script principal pour les interactions du site
document.addEventListener('DOMContentLoaded', function() {
    // Animation des sections au scroll
    const sections = document.querySelectorAll('.section-container');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Gestion de la navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mise à jour des liens actifs
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll vers la section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Mise à jour du lien actif au scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Animation des cartes au hover
    const hoverCards = document.querySelectorAll('.hover-card');
    
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Gestion du tooltip global
    const tooltip = document.getElementById('tooltip');
    
    document.addEventListener('mousemove', function(e) {
        if (tooltip.classList.contains('visible')) {
            // Éviter que le tooltip ne sorte de l'écran
            const tooltipWidth = tooltip.offsetWidth;
            const tooltipHeight = tooltip.offsetHeight;
            
            let left = e.pageX + 15;
            let top = e.pageY - 15;
            
            if (left + tooltipWidth > window.innerWidth) {
                left = e.pageX - tooltipWidth - 15;
            }
            
            if (top + tooltipHeight > window.innerHeight) {
                top = e.pageY - tooltipHeight - 15;
            }
            
            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        }
    });
    
    // Effet de parallaxe pour les peintures hollandaises
    const dutchPaintings = document.querySelectorAll('.dutch-painting');
    
    window.addEventListener('scroll', () => {
        dutchPaintings.forEach(painting => {
            const rect = painting.getBoundingClientRect();
            const isVisible = (
                rect.top < window.innerHeight &&
                rect.bottom > 0
            );
            
            if (isVisible) {
                const scrollPosition = window.pageYOffset;
                const offset = scrollPosition * 0.1;
                painting.style.backgroundPosition = `center ${50 + offset * 0.05}%`;
            }
        });
    });
});
