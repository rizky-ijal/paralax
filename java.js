let stars = document.getElementById('stars');
let meteor = document.getElementById('meteor');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let botton = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});