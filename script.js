// GSAP
// gsap.from(".container", { duration: 1, y: 200 });
gsap.from(".container", { duration: 0.5, y: 300 });
gsap.from(".nav-item", { duration: 0.5, x: 300, delay: 1 });

let i = 0;
let txt = "Welcome to Dough.Land";
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
