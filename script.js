// type js
var typed = new Typed('#typing-text', {
    strings: ["Coder🚀", "Developer🔖",],
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



// for music & stars

 // Generate blinking stars
 const starsContainer = document.querySelector(".stars");
 for (let i = 0; i < 100; i++) {
   const star = document.createElement("div");
   star.classList.add("star");
   star.style.left = Math.random() * 100 + "vw";
   star.style.top = Math.random() * 100 + "vh";
   star.style.animationDelay = Math.random() * 2 + "s";
   starsContainer.appendChild(star);
 }

 // Generate shooting stars
 const shootingStarsContainer = document.querySelector(".shooting-stars");
 for (let i = 0; i < 10; i++) {
   const shootingStar = document.createElement("div");
   shootingStar.classList.add("shooting-star");
   shootingStar.style.left = Math.random() * 100 + "vw";
   shootingStar.style.top = Math.random() * 100 + "vh";
   shootingStar.style.animationDelay = Math.random() * 4 + "s";
   shootingStarsContainer.appendChild(shootingStar);
 }

 // Play background music on button click
 const button = document.getElementById("cta-button");
 const bgMusic = document.getElementById("bg-music");

 button.addEventListener("click", () => {
   bgMusic.play();
   alert("Your Galaxy Music Begins! 🎵");
 });