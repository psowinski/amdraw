import { Background } from './background.js';
import { Fan } from './fan.js';
import { InputHandler } from './input.js';
import { Layer } from './layer.js';
import { GameMode } from './mode.js';
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
    this.drawLayer = new Layer(this);
    this.player = new Player(this, this.drawLayer);
    this.input = new InputHandler(canvas);

    this.mode = GameMode.Draw;
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

    if (this.mode === GameMode.White) {
      this.background.draw(context);
    } else if (this.mode === GameMode.Black) {
      this.drawBlack(context);
    } else {
      this.background.draw(context);
      this.fan.draw(context);
    }
    this.drawLayer.draw(context);
    this.panel.draw(context);
    
    if (this.mode === GameMode.Draw) {
      this.player.draw(context);
    }
  }

  drawBlack(context) {
    context.fillStyle = "black";
    context.fillRect(0, 0, this.width, this.height);
  }

  setMode(mode) {
    this.mode = mode;
  }
}
