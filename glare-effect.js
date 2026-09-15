// get the mouse glare element
const mouse_glare = document.querySelector('.mouse-glare');

let pending_frame = false;
let mouse_x = 0;
let mouse_y = 0;

// move the orb effect to the user's mouse position
function update_orb() {
    pending_frame = false;

    mouse_glare.style.setProperty('--mx', mouse_x + 'px');
    mouse_glare.style.setProperty('--my', mouse_y + 'px');
    mouse_glare.style.opacity = '1';
}

// update the orb whenever the user's mouse moves
window.addEventListener('mousemove', (event) => {
    mouse_x = event.clientX;
    mouse_y = event.clientY;

    /* skip if orb update is already in progress */
    if (pending_frame) return;

    pending_frame = true;
    // we use request animation frame instead of updating position directly because
    // it's more performant, yields if the website isn't the active tab, and matches 
    // monitor refresh rate
    // found here: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
    requestAnimationFrame(update_orb); 
})