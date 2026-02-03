// Shopping Cart Management
let cart = [];
let cartCount = 0;

// Thumbnail Image Switching
document.addEventListener('DOMContentLoaded', () => {
    initializeThumbnails();
    initializeQuantityControls();
    initializeCartButtons();
    initializeNewsletterForm();
    animateOnScroll();
});

// Thumbnail Gallery
function initializeThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active class to clicked thumbnail
            thumb.classList.add('active');

            // Update main image
            const thumbImg = thumb.querySelector('img');
            if (thumbImg && mainImage) {
                mainImage.src = thumbImg.src;
            }
        });
    });
}

// Quantity Controls
function initializeQuantityControls() {
    const qtyInput = document.querySelector('.qty-input');
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');

    if (!qtyInput || !minusBtn || !plusBtn) return;

    minusBtn.addEventListener('click', () => {
        let value = parseInt(qtyInput.value);
        if (value > 1) {
            qtyInput.value = value - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        let value = parseInt(qtyInput.value);
        const max = parseInt(qtyInput.max);
        if (value < max) {
            qtyInput.value = value + 1;
        }
    });

    qtyInput.addEventListener('change', () => {
        let value = parseInt(qtyInput.value);
        const min = parseInt(qtyInput.min);
        const max = parseInt(qtyInput.max);

        if (value < min) qtyInput.value = min;
        if (value > max) qtyInput.value = max;
    });
}

// Cart Functionality
function initializeCartButtons() {
    const addToCartBtn = document.querySelector('.add-to-cart');
    const buyNowBtn = document.querySelector('.buy-now');
    const cartCountEl = document.querySelector('.cart-count');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(document.querySelector('.qty-input').value);
            const variant = document.querySelector('.variant-btn.active')?.textContent || 'Standard';

            addToCart({
                name: 'Mummert Labubu - Limited Edition',
                variant: variant,
                price: 199.99,
                quantity: quantity
            });

            // Update cart count
            cartCount += quantity;
            if (cartCountEl) {
                cartCountEl.textContent = cartCount;
            }

            // Show success message
            showNotification('Produkt wurde zum Warenkorb hinzugefügt!', 'success');
        });
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            const quantity = parseInt(document.querySelector('.qty-input').value);
            const variant = document.querySelector('.variant-btn.active')?.textContent || 'Standard';

            addToCart({
                name: 'Mummert Labubu - Limited Edition',
                variant: variant,
                price: 199.99,
                quantity: quantity
            });

            // Redirect to checkout (simulated)
            showNotification('Weiter zur Kasse...', 'success');
            setTimeout(() => {
                // window.location.href = '/checkout';
                console.log('Redirecting to checkout...');
            }, 1000);
        });
    }

    // Related product add to cart buttons
    const relatedAddBtns = document.querySelectorAll('.product-card .btn-small');
    relatedAddBtns.forEach(btn => {
        if (!btn.disabled) {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.product-card');
                const productName = card.querySelector('h3').textContent;
                const price = parseFloat(card.querySelector('.current-price').textContent.replace('€', '').replace(',', '.'));

                addToCart({
                    name: productName,
                    variant: 'Standard',
                    price: price,
                    quantity: 1
                });

                cartCount++;
                if (cartCountEl) {
                    cartCountEl.textContent = cartCount;
                }

                showNotification(`${productName} zum Warenkorb hinzugefügt!`, 'success');
            });
        }
    });
}

function addToCart(item) {
    cart.push(item);
    console.log('Cart:', cart);
    // Here you would typically update localStorage or send to server
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Variant Selection
document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!e.target.disabled) {
            document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
});

// Newsletter Form
function initializeNewsletterForm() {
    const form = document.querySelector('.newsletter-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;

            // Simulate newsletter signup
            showNotification('Vielen Dank! Du erhältst jetzt unseren Newsletter.', 'success');
            form.reset();
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#4CAF50' : '#FF6B6B'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Scroll Animations
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.product-card, .trust-item, .customer-review').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Load cart from localStorage on page load
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.querySelector('.cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = cartCount;
    }
}

console.log('Mummert Supply - E-Commerce loaded successfully! 🎨');
