document.addEventListener('DOMContentLoaded', () => {

    /* --- MOBILE MENU TOGGLE --- */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* --- INTERSECTION OBSERVER FOR FADE-INS --- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    /* --- FAST CURSOR GLOW FOR INTERACTIVE CARDS --- */
    const glowCards = document.querySelectorAll('.project-card, .skill-category, .achievement-card, .research-card, .stat-card');
    if (window.matchMedia('(pointer: fine)').matches) {
        glowCards.forEach(card => {
            card.addEventListener('pointermove', event => {
                const rect = card.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mx', `${x}%`);
                card.style.setProperty('--my', `${y}%`);
            });
        });
    }

    /* --- CANVAS PARTICLE NETWORK --- */
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let width, height;
        let particles = [];

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isSmallScreen = window.matchMedia('(max-width: 720px)').matches;
        const particleCount = prefersReducedMotion ? 0 : (isSmallScreen ? 28 : 64);
        const connectionDistance = isSmallScreen ? 105 : 150;
        const particleColors = ['rgba(34, 211, 238, 0.52)', 'rgba(255, 94, 168, 0.42)', 'rgba(124, 255, 196, 0.38)'];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2.2 + 0.5;
                this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist / connectionDistance) * 0.24})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        }

        // Init
        resize();
        window.addEventListener('resize', resize);
        initParticles();
        if (!prefersReducedMotion) {
            animate();
        }
    }

});
