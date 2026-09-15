const line_numbers = document.querySelectorAll('.line-numbers');

const row_height = 26;
const minimum_width = 940;

function fill_line_numbers() {
    // hide the line numbers on mobile / narrow screens (anything less then 940 pixels wide)
    const visible = window.innerWidth > minimum_width;

    // for each line number instance, we calculate section height and draw 1..N depending on section height
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
// only update 150ms after the previous update
let resize_timer;
window.addEventListener('resize', () => {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(fill_line_numbers, 150);
})