// fetch all elements that should 'animate' in
const animated_in_elements = document.querySelectorAll('.animate-in');

// an intersection observer which transitions all elements that should 'animate in' when observed.
// found here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// very performant & asynchronous
const animate_in_watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('animate-in-done');

        // unobserve the element after we are done animating it
        animate_in_watcher.unobserve(entry.target);
    });
}, { rootMargin: '0px 0px -40px 0px' });

// observe all elements that should 'animate' in
animated_in_elements.forEach((element) => animate_in_watcher.observe(element));