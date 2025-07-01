// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos
    const ctaButtons = document.querySelectorAll('.cta-button');
    const menu = document.querySelector('.floating_item');
    const options = document.querySelector('.options');

    // Animação dos botões CTA
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'all 0.3s ease';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Menu Flutuante
    if (menu && options) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('active');
            options.classList.toggle('show');
        });

        // Fecha o menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !options.contains(e.target)) {
                menu.classList.remove('active');
                options.classList.remove('show');
            }
        });
    }

    // Smooth Scroll para todas as ancoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Animação de Entrada dos Elementos
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.price-box, .benefit-item, .step-item').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    };
    observeElements();

    // Prevenção de Múltiplos Cliques
    const preventDoubleClick = () => {
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.classList.contains('processing')) {
                    e.preventDefault();
                    return;
                }
                button.classList.add('processing');
                setTimeout(() => {
                    button.classList.remove('processing');
                }, 1000);
            });
        });
    };
    preventDoubleClick();
});

// Adiciona os estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);