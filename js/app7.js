const basilan = document.querySelector('#basilan');
const a = document.querySelector('#a');

basilan.addEventListener('click', () => {
    
    if (a.style.display === 'none' || a.style.display === '') {
        a.style.display = 'block'; 
    } else {
        a.style.display = 'none'; 
    }
});