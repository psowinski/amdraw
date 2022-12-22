import { Game } from "./game.js";

window.addEventListener('load', function() {
  const canvas = document.getElementById('app-canvas');
  const context = canvas.getContext('2d');

  canvas.width = 550;
  canvas.height = 500;

  const game = new Game(canvas);

  function animate() {
    game.update();6
    game.draw(context);
    requestAnimationFrame(animate);
  }
  animate();
});