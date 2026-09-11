const line_numbers = document.querySelectorAll('.line-numbers');

const row_height = 26;
const minimum_width = 940;

function fill_line_numbers() {
    /* hide the numbers on mobile / narrow screens */
    const visible = window.innerWidth > minimum_width;

    line_numbers.forEach((line_number_element) => {
        if (!visible) {
            line_number_element.textContent = '';
            return;
        }

        const rows = Math.max(4, Math.round(line_number_element.offsetHeight / row_height));

        let numbers = '';
        for (let i = 1; i <= rows; i++) {
            numbers += i + '\n';
        }

        line_number_element.textContent = numbers;
    });
}

fill_line_numbers();

// re-render the line numbers whenever the window size changes
// uses timer so we're not reseting a ton during the window resize
let resize_timer;
window.addEventListener('resize', () => {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(fill_line_numbers, 150);
})