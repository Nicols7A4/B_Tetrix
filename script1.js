let bton = document.getElementById("bton");

bton.addEventListener("click", function () {
  alert("Hola");
});

//width="300" height="600"
const WIDTH = 300;
const HEIGHT = 600;
const CUBE = 50;

const CUBE_WIDTH = WIDTH / CUBE;
const CUBE_HEIGHT = HEIGHT / CUBE;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//console.log(CUBE_HEIGHT);
//console.log(CUBE_WIDTH);

drawRandom();

// Funciones
function drawRandom() {
  for (let i = 0; i < CUBE_WIDTH; i++) {
    for (let j = 0; j < CUBE_HEIGHT; j++) {
      let x = i * CUBE;
      let y = j * CUBE;

      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, CUBE, CUBE);
    }
  }
}
