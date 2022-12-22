import { Colors } from "./color.js";

export class Player {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.color = Colors.LawnGreen;

    this.radius = 6;
    this.x = 0;
    this.y = 0;
    this.drawPoint = false;
    this.drawCursor = false;
  }

  setColor(color) {
    this.color = color;
  }

  update() {
    let mouse = this.game.input?.mouse;
    if (mouse) {
      this.x = mouse.x;
      this.y = mouse.y;
      this.drawPoint = mouse.lmb;
      this.drawCursor = true;
    }
  }

  draw(context) {
    if (this.drawPoint)
      this.layer.drawPoint(this.x, this.y, this.radius, this.color);
    this.layer.draw(context);

    if (this.drawCursor) {
      context.fillStyle = this.color.getStyle();
      context.beginPath();
      context.arc(this.x-2, this.y-2, this.radius, 0, 2 * Math.PI);
      context.fill();
    }
  }
}
