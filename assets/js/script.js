// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('form[action="send-email.php"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]');
            const email = this.querySelector('input[name="email"]');
            const message = this.querySelector('textarea[name="message"]');
            let valid = true;
            
            // Reset previous errors
            this.querySelectorAll('.error').forEach(el => el.remove());
            
            // Name validation
            if (!name.value.trim()) {
                showError(name, 'Nama harus diisi');
                valid = false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError(email, 'Email harus diisi');
                valid = false;
            } else if (!emailRegex.test(email.value)) {
                showError(email, 'Format email tidak valid');
                valid = false;
            }
            
            // Message validation
            if (!message.value.trim()) {
                showError(message, 'Pesan harus diisi');
                valid = false;
            }
            
            if (!valid) {
                e.preventDefault();
            }
        });
        
        function showError(input, message) {
            const error = document.createElement('div');
            error.className = 'error';
            error.style.color = '#ff4757';
            error.style.fontSize = '0.9rem';
            error.style.marginTop = '5px';
            error.textContent = message;
            input.parentNode.appendChild(error);
        }
    }
    
    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Current year in footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
// Add this to your existing script.js or create new one
document.addEventListener('DOMContentLoaded', function() {
    // Character counter for message textarea
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            // Change color based on length
            if (currentLength > 450) {
                charCount.style.color = '#ff4757';
            } else if (currentLength > 300) {
                charCount.style.color = '#ffa502';
            } else {
                charCount.style.color = '#00adb5';
            }
        });
        
        // Initialize counter
        charCount.textContent = messageTextarea.value.length;
    }
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Clear previous validation messages
            this.querySelectorAll('.validation-message').forEach(el => el.remove());
            this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            this.querySelectorAll('.success').forEach(el => el.classList.remove('success'));
            
            // Validate each field
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Name validation
            if (!name.value.trim()) {
                showValidationError(name, 'Nama tidak boleh kosong');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showValidationError(name, 'Nama minimal 2 karakter');
                isValid = false;
            } else {
                showValidationSuccess(name);
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showValidationError(email, 'Email tidak boleh kosong');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showValidationError(email, 'Format email tidak valid');
                isValid = false;
            } else {
                showValidationSuccess(email);
            }
            
            // Subject validation
            if (!subject.value.trim()) {
                showValidationError(subject, 'Subjek tidak boleh kosong');
                isValid = false;
            } else if (subject.value.trim().length < 5) {
                showValidationError(subject, 'Subjek minimal 5 karakter');
                isValid = false;
            } else {
                showValidationSuccess(subject);
            }
            
            // Message validation
            if (!message.value.trim()) {
                showValidationError(message, 'Pesan tidak boleh kosong');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showValidationError(message, 'Pesan minimal 10 karakter');
                isValid = false;
            } else {
                showValidationSuccess(message);
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
        
        function showValidationError(input, message) {
            input.classList.add('error');
            input.classList.remove('success');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'validation-message error';
            errorDiv.textContent = message;
            
            const parent = input.closest('.form-group');
            parent.appendChild(errorDiv);
        }
        
        function showValidationSuccess(input) {
            input.classList.remove('error');
            input.classList.add('success');
            
            const successDiv = document.createElement('div');
            successDiv.className = 'validation-message success';
            successDiv.textContent = '✓ Valid';
            
            const parent = input.closest('.form-group');
            parent.appendChild(successDiv);
        }
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Remove error class while typing
                this.classList.remove('error');
                const parent = this.closest('.form-group');
                const errorMsg = parent.querySelector('.validation-message');
                if (errorMsg) errorMsg.remove();
            });
        });
        
        function validateField(field) {
            if (!field.value.trim()) return;
            
            if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    showValidationError(field, 'Format email tidak valid');
                } else {
                    showValidationSuccess(field);
                }
            } else if (field.id === 'name' && field.value.trim().length < 2) {
                showValidationError(field, 'Nama minimal 2 karakter');
            } else if (field.id === 'subject' && field.value.trim().length < 5) {
                showValidationError(field, 'Subjek minimal 5 karakter');
            } else if (field.id === 'message' && field.value.trim().length < 10) {
                showValidationError(field, 'Pesan minimal 10 karakter');
            }
        }
    }
    
    // Smooth focus on form elements
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (input) {
            input.addEventListener('focus', function() {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    group.classList.remove('focused');
                }
            });
        }
    });
});