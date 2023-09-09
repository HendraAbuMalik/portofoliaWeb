import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const typed = new Typed('#heading', {
  strings: ['Hey, There!', 'I am Fullstack Developer', 'Sofware Engineer', 'An Indie Maker.'],
  typeSpeed: 78,
  loop: true,
  backSpeed: 98,
  cursorChar: "_",
//   smartBackspace: true,
}); 

const form = document.getElementById("form");

form.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const  myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);

       confetti.create(myCanvas, {
          resize: true,
          useWorker: true
        });
        confetti({
          particleCount: 500,
          spread: 250
        });
        myCanvas.remove();
    }

});