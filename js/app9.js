const text = document.querySelectorAll('.text');

text.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.style.color = 'red'; 
    });

    text.addEventListener('mouseout', () => {
        text.style.color = 'turquoise'; 
    });
});