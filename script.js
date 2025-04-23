// Script pour les interactions de base du mockup
document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Mise à jour de la classe active dans la navigation
            navLinks.forEach(l => l.classList.remove('font-bold', 'text-accent'));
            this.classList.add('font-bold', 'text-accent');
            
            // Scroll vers la section
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Gestion des boutons de filtre pour la chronologie
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('bg-gray-800', 'text-white'));
            this.classList.add('bg-gray-800', 'text-white');
            
            // Simulation de filtrage (pour le mockup)
            console.log('Filtre activé:', this.textContent.trim());
        });
    });
    
    // Animation des cartes au scroll
    const cards = document.querySelectorAll('.card');
    const animateOnScroll = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialisation des styles pour l'animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Écoute du scroll pour l'animation
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Animation initiale
    
    // Simulation des tooltips pour les visualisations
    const placeholders = document.querySelectorAll('.placeholder-viz');
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Simulation d'interaction avec les visualisations
            if (x > rect.width / 3 && x < 2 * rect.width / 3 && 
                y > rect.height / 3 && y < 2 * rect.height / 3) {
                this.style.backgroundColor = '#e5e7eb';
            } else {
                this.style.backgroundColor = '#f3f4f6';
            }
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f3f4f6';
        });
    });
});
