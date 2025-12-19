// Basit Scroll Animasyonu
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const speed = 0.05;
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});

// Belgesel butonu etkileşimi
document.querySelector('.cta-primary').addEventListener('click', () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
});
