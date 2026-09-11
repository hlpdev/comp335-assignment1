const animated_in_elements = document.querySelectorAll('.animate-in');

const animate_in_watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('animate-in-done');

        /* only reveal once */
        animate_in_watcher.unobserve(entry.target);
    });
}, { rootMargin: '0px 0px -12% 0px' });

animated_in_elements.forEach((element) => animate_in_watcher.observe(element));