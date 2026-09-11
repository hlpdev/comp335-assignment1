const tabs = document.querySelectorAll('#top-tabs .tab');
const sections = document.querySelectorAll('section[id]');

function select_tab(id) {
    tabs.forEach((tab) => {
        tab.classList.toggle('tab-selected', tab.getAttribute('href') === '#' + id);
    });
}

const section_watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            select_tab(entry.target.id);
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => section_watcher.observe(section));