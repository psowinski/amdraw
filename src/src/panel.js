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
    this.btnClear = new ImgButton("clear", this.x + 15, this.y + 80);

    let dx = 160;
    const distance = 40;

    this.colorButtons = [
      new Button(Colors.Red, this.x + 15, this.y + dx, 20, 20),
      new Button(Colors.LawnGreen, this.x + 15, this.y + dx + distance, 20, 20),
      new Button(Colors.DodgerBlue, this.x + 15, this.y + dx + 2*distance, 20, 20),
      new Button(Colors.Yellow, this.x + 15, this.y + dx + 3*distance, 20, 20),
      new Button(Colors.DeepPink, this.x + 15, this.y + dx + 4*distance, 20, 20)];
  }

  update() {
    const mouse = this.game.input.mouse;
    if (mouse && mouse.click) {
      for (const button in this.colorButtons) {
        const ctrl = this.colorButtons[button];
        if (ctrl.hitTest(mouse.x, mouse.y) === true)
          this.game.player.setColor(ctrl.color);
      }
      if (this.btnClear.hitTest(mouse.x, mouse.y) === true) {
        this.game.player.layer.reset();
      }
      if (this.btnNewDoc.hitTest(mouse.x, mouse.y) === true) {
        this.game.background.change();
        this.game.player.layer.reset();
      }      
    }
  }

  draw(context) {
    context.fillStyle = '#eee';
    context.fillRect(this.x, this.y, this.width, this.height);

    this.btnNewDoc.draw(context);
    this.btnClear.draw(context);
    for (const button in this.colorButtons) {
      this.colorButtons[button].draw(context);
    }
  }
}