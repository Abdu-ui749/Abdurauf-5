const a = document.getElementById('Abdu');

document.addEventListener('keydown', function(event) {
    a.textContent = `Tapdim Budu? ${event.key}`;
});