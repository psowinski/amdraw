import { Game } from "./game.js";

window.addEventListener('load', function() {
  const canvas = document.getElementById('app-canvas');
  const context = canvas.getContext('2d');

  canvas.width = 650;
  canvas.height = 600;

  const game = new Game(canvas);

  function animate() {
    game.update();6
    game.draw(context);
    requestAnimationFrame(animate);
  }
  animate();
});