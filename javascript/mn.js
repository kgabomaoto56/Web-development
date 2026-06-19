document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Product Filter Functionality (Shop Page) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Toggle active button class
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Filter elements
                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const originalText = button.textContent;
            button.textContent = 'Added ✔';
            button.style.backgroundColor = '#b59410';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '#1a1a1a';
            }, 1500);
        });
    });

    
    const contactForm = document.getElementById('contactForm');
    const contactFeedback = document.getElementById('contactFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            
            contactFeedback.textContent = `Thank you, ${name}. Your message has been sent successfully!`;
            contactFeedback.className = "form-feedback success";
            
            contactForm.reset();
        });
    }

    
    const enquiryForm = document.getElementById('enquiryForm');
    const enquiryFeedback = document.getElementById('enquiryFeedback');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('enquiryName').value;
            
            enquiryFeedback.textContent = `Thank you, ${name}. Your product enquiry has been logged. Our design team will contact you shortly.`;
            enquiryFeedback.className = "form-feedback success";
            
            enquiryForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactFeedback = document.getElementById('contactFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            
            contactFeedback.textContent = `Thank you, ${name}. Your message has been sent successfully!`;
            contactFeedback.className = "form-feedback success";
            contactFeedback.classList.remove('hidden');
            
            contactForm.reset();
        });
    }
});