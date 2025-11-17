// ===========================
// Smooth Scrolling for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Navbar Background on Scroll
// ===========================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===========================
// Scroll Animation for Elements
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .service-card, .contact-card');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
});

// ===========================
// Service Card Hover Effect
// ===========================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#667eea';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '';
    });
});

// ===========================
// Contact Card Click to Copy
// ===========================
document.querySelectorAll('.contact-card').forEach(card => {
    const emailLink = card.querySelector('a[href^="mailto:"]');
    const phoneLink = card.querySelector('a[href^="tel:"]');
    
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.textContent.trim();
            copyToClipboard(email, 'Email');
            window.location.href = this.href;
        });
    }
    
    if (phoneLink) {
        phoneLink.addEventListener('click', function(e) {
            const phone = this.textContent.trim();
            showNotification(`Menghubungi: ${phone}`);
        });
    }
});

// ===========================
// Copy to Clipboard Function
// ===========================
function copyToClipboard(text, type) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(`${type} disalin ke clipboard!`);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
}

// ===========================
// Show Notification
// ===========================
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.style.textAlign = 'center';
    notification.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>${message}
    `;
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===========================
// Parallax Effect for Hero Section
// ===========================
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// Button Click Animation
// ===========================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Search Functionality (Optional)
// ===========================
function searchSite(query) {
    const sections = document.querySelectorAll('section');
    const searchQuery = query.toLowerCase();
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(searchQuery)) {
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// ===========================
// Console Welcome Message
// ===========================
console.log('%c🖥️ Service Laptop Jakarta', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cMelayani Service Panggilan In-Home untuk daerah Jakarta dan Sekitarnya', 'color: #764ba2; font-size: 14px;');
console.log('%c📞 Hubungi: 081389810440', 'color: #333; font-size: 12px;');

// ===========================
// Prevent Right Click (Optional - Remove if not needed)
// ===========================
// Uncomment below to prevent right-click
/*
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showNotification('Right-click disabled');
});
*/

// ===========================
// Back to Top Button (Optional Enhancement)
// ===========================
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-arrow-up"></i>';
    button.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.display = 'none';
    button.style.zIndex = '9999';
    button.setAttribute('aria-label', 'Back to top');
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
};

// Initialize back to top button
createBackToTopButton();

// ===========================
// Form Validation (If you add a contact form)
// ===========================
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// ===========================
// Performance Optimization
// ===========================
// Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}
