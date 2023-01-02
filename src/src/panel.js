import { Button, ImgButton } from "./button.js";
import { Colors } from "./color.js";

export class Panel {
  constructor(game, worldWidth, worldHeight) {
    this.game = game;
    this.width = 50;
    this.height = worldHeight;
    this.x = worldWidth - this.width;
    this.y = 0;

    this.btnNewDoc = new ImgButton("newdoc", this.x + 15, this.y + 20);
    this.btnPrevDoc = new ImgButton("prevdoc", this.x + 15, this.y + 60);
    this.btnClear = new ImgButton("clear", this.x + 15, this.y + 100);

    let idx = 0;
    let dx = 160;
    const distance = 40;

    this.colorButtons = [
      new Button(Colors.Red, this.x + 15, this.y + dx + idx++ * distance, 20, 20),
      new Button(Colors.LawnGreen, this.x + 15, this.y + dx + idx++ * distance, 20, 20),
      new Button(Colors.DodgerBlue, this.x + 15, this.y + dx + idx++ * distance, 20, 20),
      new Button(Colors.Orange, this.x + 15, this.y + dx + idx++ * distance, 20, 20),
      new Button(Colors.Yellow, this.x + 15, this.y + dx + idx++ * distance, 20, 20),
      new Button(Colors.DeepPink, this.x + 15, this.y + dx + idx++ * distance, 20, 20),
      new Button(Colors.Chocolate, this.x + 15, this.y + dx + idx++ * distance, 20, 20)];
  }

  update() {
    const input = this.game.input;
    if (input.clicked) {
      for (const button in this.colorButtons) {
        const ctrl = this.colorButtons[button];
        if (ctrl.hitTest(input.x, input.y) === true)
          this.game.player.setColor(ctrl.color);
      }
      if (this.btnClear.hitTest(input.x, input.y) === true) {
        this.game.player.layer.reset();
      }
      if (this.btnNewDoc.hitTest(input.x, input.y) === true) {
        this.game.background.change();
        this.game.player.layer.reset();
      }
      if (this.btnPrevDoc.hitTest(input.x, input.y) === true) {
        this.game.background.change(-1);
        this.game.player.layer.reset();
      }
    }
  }

  draw(context) {
    context.fillStyle = '#eee';
    context.fillRect(this.x, this.y, this.width, this.height);

    this.btnNewDoc.draw(context);
    this.btnPrevDoc.draw(context);
    this.btnClear.draw(context);
    for (const button in this.colorButtons) {
      this.colorButtons[button].draw(context);
    }
  }
}