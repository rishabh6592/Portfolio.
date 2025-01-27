// type js
var typed = new Typed('#typing-text', {
    strings: ["Coder", "Developer",],
    loop: true,
    typeSpeed: 65,
    backSpeed: 65
});

// loader
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content');
    }, 2500);
};

