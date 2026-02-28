/**
 * bundle-builder.js
 * Handles flavor selection and bundle constraints
 */

document.addEventListener('DOMContentLoaded', () => {
    const selectors = {
        flavorBtn: '.add-to-bundle',
        sizeBtn: '.size-btn',
        counter: '#count',
        target: '#total-target',
        cta: '#add-to-cart-btn'
    };

    let currentTotal = 0;
    let bundleTarget = 12; // Default starting size

    // 1. Handle Size Selection
    document.querySelectorAll(selectors.sizeBtn).forEach(btn => {
        btn.addEventListener('click', (e) => {
            // UI Toggle
            document.querySelectorAll(selectors.sizeBtn).forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update Logic
            bundleTarget = parseInt(e.target.dataset.size);
            document.querySelector(selectors.target).innerText = bundleTarget;
            updateCTA();
        });
    });

    // 2. Handle Adding Flavors
    document.querySelectorAll(selectors.flavorBtn).forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentTotal < bundleTarget) {
                currentTotal += 4; // Each click adds a 4-pack
                document.querySelector(selectors.counter).innerText = currentTotal;
                updateCTA();
            }
        });
    });

    // 3. Update CTA Button State
    function updateCTA() {
        const cta = document.querySelector(selectors.cta);
        const remaining = bundleTarget - currentTotal;

        if (remaining > 0) {
            cta.innerText = `ADD ${remaining / 4} MORE 4-PACKS`;
            cta.disabled = true;
            cta.style.backgroundColor = "#99a194";
        } else {
            cta.innerText = "ADD BUNDLE TO CART";
            cta.disabled = false;
            cta.style.backgroundColor = "#000";
        }
    }
});