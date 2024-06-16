var popup = document.querySelector('.popup');
var glow = document.querySelector('.Glow');

document.getElementById('close-icon').addEventListener('click', function() {
    popup.style.display = 'none';
    glow.classList.remove('dimmed');
});

var delay = 2000;

setTimeout(function() {
    popup.style.display = 'flex';
    glow.classList.add('dimmed');
}, delay);