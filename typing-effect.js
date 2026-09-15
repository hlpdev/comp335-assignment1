// get the console text in the hero / first section of the page
const console_text = document.getElementById('console-text');

// phrases to type through
const phrases = [
    'software engineer',
    'game developer'
];

// conf
const type_delay_ms = 85;
const delete_delay_ms = 40;
const wait_delay_ms = 1800;

// state
let phrase_index = 0;
let char_index = 0;
let deleting = false;

function tick() {
    // get the active phrase
    const phrase = phrases[phrase_index];

    // move current index forward or backward depending on direction
    char_index += deleting ? -1 : 1;

    // apply the new string slice to the element
    console_text.textContent = phrase.slice(0, char_index);

    // if we reach the end of the phrase, reverse
    if (!deleting && char_index === phrase.length) {
        deleting = true;

        setTimeout(tick, wait_delay_ms);
        return;
    }

    // if we're done deleting the phrase, reverse and go to the next phrase
    if (deleting && char_index === 0) {
        deleting = false;
        phrase_index = (phrase_index + 1) % phrases.length;
    }

    // tick again after the delete or type delay
    setTimeout(tick, deleting ? delete_delay_ms : type_delay_ms);
}

// initial state
char_index = phrases[0].length;
deleting = true;

// start the tick after the wait delay
setTimeout(tick, wait_delay_ms);