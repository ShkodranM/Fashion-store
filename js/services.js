// Gestion des fonctionnalités interactives de la page services
document.addEventListener('DOMContentLoaded', function() {
    // Gestion de l'ouverture/fermeture des questions FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fermer tous les autres éléments FAQ
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Basculer l'état actif de l'élément cliqué
            item.classList.toggle('active');
        });
    });
    
});
