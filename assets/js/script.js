// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const links = document.querySelectorAll('ul li a');
const largeCursor = document.getElementById('cursor');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        applyCursorEffect(largeCursor);
    });

    link.addEventListener('mouseleave', () => {
       revertCursorEffect(largeCursor);
    });
});

function applyCursorEffect(element) {
    element.style.mixBlendMode = 'difference';
    element.style.transform = 'scale(2)';
}

function revertCursorEffect(element) {
    element.style.mixBlendMode = 'normal';
    element.style.width = '20px';
    element.style.height = '20px';
    element.style.transform = 'translate(-50%, -50%)';
}

