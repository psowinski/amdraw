import { Button, ImgButton } from "./button.js";
import { Colors } from "./color.js";
import { GameMode } from "./mode.js";

export class Panel {
  constructor(game, worldWidth, worldHeight) {
    this.game = game;
    this.width = 30;
    this.height = worldHeight;
    this.x = worldWidth - this.width;
    this.y = 0;

    const xmargin = 5;

    this.btnNewDoc = new ImgButton("newdoc", this.x + xmargin, this.y + 20);
    this.btnPrevDoc = new ImgButton("prevdoc", this.x + xmargin, this.y + 60);
    this.btnClear = new ImgButton("clear", this.x + xmargin, this.y + 100);

    let idx = 0;
    let ymargin = 160;
    const distance = 40;

    this.colorButtons = [
      new Button(Colors.Red, this.x + xmargin, this.y + ymargin + idx++ * distance, 20, 20),
      new Button(Colors.LawnGreen, this.x + xmargin, this.y + ymargin + idx++ * distance, 20, 20),
      new Button(Colors.DodgerBlue, this.x + xmargin, this.y + ymargin + idx++ * distance, 20, 20),
      new Button(Colors.Orange, this.x + xmargin, this.y + ymargin + idx++ * distance, 20, 20),
      new Button(Colors.Yellow, this.x + xmargin, this.y + ymargin + idx++ * distance, 20, 20),
      new Button(Colors.DeepPink, this.x + xmargin, this.y + ymargin + idx++ * distance, 20, 20),
      new Button(Colors.Chocolate, this.x + xmargin, this.y + ymargin + idx++ * distance, 20, 20)];
  
    this.btnMode = new ImgButton("mode", this.x + xmargin, this.y + ymargin + 60 + idx * distance);
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
      else if (this.btnNewDoc.hitTest(input.x, input.y) === true) {
        this.changeBackground(1);
      }
      else if (this.btnPrevDoc.hitTest(input.x, input.y) === true) {
        this.changeBackground(-1);
      }
      else if (this.btnMode.hitTest(input.x, input.y) === true) {
        this.switchGameMode();
      }
    }
  }

  changeBackground(direction) {
    this.game.background.change(direction);
    this.game.player.layer.reset();    
  }

  switchGameMode() {
    if (this.game.mode === GameMode.White) {
      this.game.setMode(GameMode.Draw);
      this.game.player.setCanDraw(true);
    } else if (this.game.mode === GameMode.Black) {
      this.game.setMode(GameMode.White);
      this.game.player.setCanDraw(false);
    } else {
      this.game.setMode(GameMode.Black);
      this.game.player.setCanDraw(false);
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
    this.btnMode.draw(context);
  }
}