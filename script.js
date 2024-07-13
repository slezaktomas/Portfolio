document.addEventListener('DOMContentLoaded', () => {
const symbols = ['0', '1', '{', '}', '@', '$', '&', '*','<','>', '(', ')', '[', ']', '!', '?', '#', '%', '^', '+', '-', '=', '_', ':', ';', '<', '>', ',', '.', '/', '\\', '|', '~', '`', "'"];
    const background = document.querySelector('.background-animation');

    for (let i = 0; i < 100; i++) {
        const span = document.createElement('span');
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        span.textContent = symbol;
        span.style.left = Math.random() * 100 + 'vw';
        span.style.top = Math.random() * 100 + 'vh';
        span.style.fontSize = Math.random() * 24 + 12 + 'px'; // Random font size between 12px and 36px
        span.style.animationDuration = Math.random() * 5 + 5 + 's';
        span.style.animationDelay = Math.random() * 5 + 's';
        background.appendChild(span);
    }
});