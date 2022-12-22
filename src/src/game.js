import { Background } from './background.js';
import { Fan } from './fan.js';
import { InputHandler } from './input.js';
import { Layer } from './layer.js';
import { Panel } from './panel.js';
import { Player } from './player.js';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;

    this.panel = new Panel(this, this.canvas.width, this.canvas.height);

    this.width = this.canvas.width - this.panel.width;
    this.height = this.canvas.height;

    this.background = new Background(this.width, this.height);
    this.fan = new Fan(this);
    this.player = new Player(this, new Layer(this));
    this.input = new InputHandler(canvas);
  }

  update() {
    this.input.update();
    this.background.update();
    this.fan.update();
    this.player.update();
    this.panel.update();
  }

  draw(context) {
    context.clearRect(0, 0, this.width, this.height);

    this.background.draw(context);
    this.fan.draw(context);
    this.player.draw(context);
    this.panel.draw(context);
  }
}
