export class Layer {
  constructor(game) {
    this.game = game;
    this.canvas = new OffscreenCanvas(this.game.width, this.game.height);
    this.context = this.canvas.getContext('2d');
    this.reset();
  }

  reset() {
    this.context.clearRect(0, 0, this.game.width, this.game.height);
  }

  drawPoint(x, y, radius, color) {
    this.context.fillStyle = color.getStyle(0.5);
    this.context.beginPath();
    this.context.arc(x-2, y-2, radius, 0, 2 * Math.PI);
    this.context.fill();
  }

  draw(visibleContext) {
    visibleContext.globalAlpha = 0.8;
    visibleContext.drawImage(this.canvas, 0, 0);
    visibleContext.globalAlpha = 1.0;
  }
}
