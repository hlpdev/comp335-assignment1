const console_text = document.getElementById('console-text');

const phrases = [
    'software engineer',
    'game developer'
];

const type_delay_ms = 85;
const delete_delay_ms = 40;
const wait_delay_ms = 1800;

let phrase_index = 0;
let char_index = 0;
let deleting = false;

function tick() {
    const phrase = phrases[phrase_index];

    char_index += deleting ? -1 : 1;
    console_text.textContent = phrase.slice(0, char_index);

    if (!deleting && char_index === phrase.length) {
        deleting = true;

        setTimeout(tick, wait_delay_ms);
        return;
    }

    if (deleting && char_index === 0) {
        deleting = false;
        phrase_index = (phrase_index + 1) % phrases.length;
    }

    setTimeout(tick, deleting ? delete_delay_ms : type_delay_ms);
}

char_index = phrases[0].length;
deleting = true;

setTimeout(tick, wait_delay_ms);