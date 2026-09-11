const hover_orb = document.querySelector('.spot');

let pending_frame = false;
let mouse_x = 0;
let mouse_y = 0;

function update_orb() {
    pending_frame = false;

    hover_orb.style.setProperty('--mx', mouse_x + 'px');
    hover_orb.style.setProperty('--my', mouse_y + 'px');
    hover_orb.style.opacity = '1';
}

window.addEventListener('mousemove', (event) => {
    mouse_x = event.clientX;
    mouse_y = event.clientY;

    /* skip if already queued, this gets fired a lot and causes issues */
    if (pending_frame) return;

    pending_frame = true;
    requestAnimationFrame(update_orb);
})