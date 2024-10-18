document.getElementById('s').addEventListener('click', () => {
    const items = document.querySelectorAll('.W');
    items.forEach((item, index) => {
        item.textContent = `Komada ${index + 1}`;
        item.classList.add('c');
    });
});