// Website Personal - Konsep Albino Toni Naina
document.addEventListener('DOMContentLoaded', function() {
    // Initialize website
    initWebsite();
});

function initWebsite() {
    // Setup navigation
    setupNavigation();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup current year in footer
    setupCurrentYear();
    
    // Setup skill bars animation
    setupSkillBars();
    
    // Setup contact form
    setupContactForm();
}

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Smooth scrolling setup
function setupSmoothScrolling() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll animations setup
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0');
        observer.observe(section);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.add('opacity-0');
        observer.observe(item);
    });
}

// Mobile menu setup
function setupMobileMenu() {
    const menuToggle = document.querySelector('button[aria-label="Menu"]');
    const navMenu = document.querySelector('nav .hidden.md\\:flex');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.toggle('hidden');
                navMenu.classList.toggle('flex');
                
                // Animate mobile menu
                if (navMenu.classList.contains('flex')) {
                    navMenu.style.animation = 'slideInRight 0.3s ease-out';
                }
            }
            
            // Update menu icon
            const icon = this.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

// Current year in footer
function setupCurrentYear() {
    const yearElement = document.querySelector('footer p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
}

// Skill bars animation
function setupSkillBars() {
    // Add animation class to skill bars
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = '0%';
    });
}

function animateSkillBars() {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const targetWidth = bar.getAttribute('data-width') || bar.style.width;
        bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        bar.style.width = targetWidth;
    });
}

// Contact form setup
function setupContactForm() {
    const contactLinks = document.querySelectorAll('a[href^="mailto:"], a[href^="https://"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Analytics tracking (simulated)
            console.log('Contact link clicked:', this.href);
        });
    });
}

// Add custom cursor on hover (optional)
function setupCustomCursor() {
    if (window.matchMedia('(pointer: fine)').matches) {
        document.body.classList.add('custom-cursor');
        
        // Add custom cursor effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .social-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                document.body.style.cursor = 'pointer';
            });
            
            element.addEventListener('mouseleave', () => {
                document.body.style.cursor = 'default';
            });
        });
    }
}

// Parallax effect for hero section
function setupParallax() {
    const heroSection = document.getElementById('home');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            const heroContent = heroSection.querySelector('.grid');
            if (heroContent) {
                heroContent.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    // Add CSS animation for slideInRight
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .opacity-0 {
            opacity: 0;
        }
        
        .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize parallax effect
    setupParallax();
    
    // Initialize custom cursor
    setupCustomCursor();
    
    // Add loading state for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Add loading class
        if (!img.complete) {
            img.classList.add('loading');
        }
    });
    
    // Add scroll progress indicator
    setupScrollProgress();
});

// Scroll progress indicator
function setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-blue-500 z-50';
    progressBar.style.width = '0%';
    progressBar.style.transition = 'width 0.3s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Handle page visibility
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Page is visible again
        console.log('Page is now visible');
    }
});

// Handle offline/online status
window.addEventListener('online', function() {
    console.log('You are now online');
    showNotification('You are back online', 'success');
});

window.addEventListener('offline', function() {
    console.log('You are now offline');
    showNotification('You are offline', 'warning');
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'warning' ? 'bg-yellow-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.mobile-menu.open');
        if (mobileMenu) {
            mobileMenu.classList.remove('open');
        }
    }
    
    // Tab key navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class on mouse click
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Print functionality
function setupPrint() {
    const printButton = document.createElement('button');
    printButton.className = 'fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 no-print';
    printButton.innerHTML = '<i class="fas fa-print"></i>';
    printButton.setAttribute('aria-label', 'Print this page');
    printButton.addEventListener('click', () => window.print());
    document.body.appendChild(printButton);
}

// Initialize print button
document.addEventListener('DOMContentLoaded', setupPrint);