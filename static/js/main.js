// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar-floating');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Category Navbar Scroll Logic
    const scrollContainer = document.getElementById('categoryContainer');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }

    // Skeleton Loader Logic (Global helper)
    setTimeout(() => {
        const skeletons = document.querySelectorAll('.skeleton-wrapper');
        const realContent = document.querySelectorAll('.real-content');

        if (skeletons.length > 0) {
            skeletons.forEach(el => el.classList.add('d-none'));
            realContent.forEach(el => {
                el.classList.remove('d-none');
                // Trigger AOS if element has animations
                if (el.getAttribute('data-aos')) {
                    el.classList.add('aos-animate');
                }
            });
            AOS.refresh();
        }
    }, 1500);
});
