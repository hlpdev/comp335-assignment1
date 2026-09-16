// get all elements with data-copy field
const copy_elements = document.querySelectorAll("[data-copy]");

// reset time for copied indicator
const copied_reset_ms = 1400;

// handle interactions for every element that copies something to the clipboard
// (currently only discord contact)
copy_elements.forEach((element) => {
    const value_element = element.querySelector('.contact-value');
    const original_text = value_element.textContent;

    element.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(element.dataset.copy);
        } catch {
            // clipboard access denied, or http, or some other issue
            return;
        }

        element.classList.add("copied");
        value_element.textContent = "copied to clipboard";

        setTimeout(() => {
            element.classList.remove("copied");
            value_element.textContent = original_text;
        }, copied_reset_ms);
    })
})