import { Colors } from "./color.js";

export class Player {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.color = Colors.LawnGreen;

    this.radius = 6;
    this.x = 0;
    this.y = 0;

    this.canDraw = true;
  }

  setColor(color) {
    this.color = color;
  }

  setCanDraw(can) {
    this.canDraw = can;
  }

  update() {
    this.x = this.game.input.x;
    this.y = this.game.input.y;
    if (this.game.input.pressed && this.canDraw)
      this.layer.drawPoint(this.x, this.y, this.radius, this.color);
  }

  draw(context) {
    context.fillStyle = this.color.getStyle();
    context.beginPath();
    context.arc(this.x-2, this.y-2, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
}
