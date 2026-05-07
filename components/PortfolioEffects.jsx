'use client';

import { useEffect } from 'react';

export default function PortfolioEffects() {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    const closeMenu = () => {
      if (!menuToggle || !navMenu) return;
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    const cleanupFns = [];

    if (menuToggle && navMenu) {
      const onMenuClick = () => {
        const isOpen = menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      };

      const onKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeMenu();
        }
      };

      menuToggle.addEventListener('click', onMenuClick);
      document.addEventListener('keydown', onKeyDown);
      cleanupFns.push(() => menuToggle.removeEventListener('click', onMenuClick));
      cleanupFns.push(() => document.removeEventListener('keydown', onKeyDown));

      document.querySelectorAll('.nav-item').forEach((item) => {
        item.addEventListener('click', closeMenu);
        cleanupFns.push(() => item.removeEventListener('click', closeMenu));
      });
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          activeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));
    cleanupFns.push(() => observer.disconnect());

    const glowCards = document.querySelectorAll(
      '.project-card, .skill-category, .achievement-card, .research-card, .stat-card',
    );
    if (window.matchMedia('(pointer: fine)').matches) {
      glowCards.forEach((card) => {
        const onPointerMove = (event) => {
          const rect = card.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty('--mx', `${x}%`);
          card.style.setProperty('--my', `${y}%`);
        };

        card.addEventListener('pointermove', onPointerMove);
        cleanupFns.push(() => card.removeEventListener('pointermove', onPointerMove));
      });
    }

    const canvas = document.getElementById('bg-canvas');
    let animationFrameId;
    let onResize;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let width;
        let height;
        let particles = [];

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isSmallScreen = window.matchMedia('(max-width: 720px)').matches;
        const particleCount = prefersReducedMotion ? 0 : isSmallScreen ? 28 : 64;
        const connectionDistance = isSmallScreen ? 105 : 150;
        const particleColors = [
          'rgba(34, 211, 238, 0.52)',
          'rgba(255, 94, 168, 0.42)',
          'rgba(124, 255, 196, 0.38)',
        ];

        onResize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        };

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

        const initParticles = () => {
          particles = [];
          for (let i = 0; i < particleCount; i += 1) {
            particles.push(new Particle());
          }
        };

        const animate = () => {
          ctx.clearRect(0, 0, width, height);

          particles.forEach((p, index) => {
            p.update();
            p.draw();

            for (let j = index + 1; j < particles.length; j += 1) {
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

          animationFrameId = requestAnimationFrame(animate);
        };

        onResize();
        window.addEventListener('resize', onResize);
        initParticles();
        if (!prefersReducedMotion) {
          animate();
        }
      }
    }

    cleanupFns.push(() => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (onResize) window.removeEventListener('resize', onResize);
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
