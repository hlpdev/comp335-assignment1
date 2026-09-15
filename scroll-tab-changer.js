// fetch all tab buttons at the top of the page
const tabs = document.querySelectorAll('#top-tabs .tab');

// fetch all sections
const sections = document.querySelectorAll('section[id]');

// when a tab is changed, activate the current section tab and deactivate the rest
function select_tab(id) {
    tabs.forEach((tab) => {
        tab.classList.toggle('tab-selected', tab.getAttribute('href') === '#' + id);
    });
}

// an intersection observer that updates the tabs at the top of the page whenever 
// the user scrolls to a new section
const section_watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            select_tab(entry.target.id);
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

// makes the section observer observe each section for when it appears on screen
sections.forEach((section) => section_watcher.observe(section));