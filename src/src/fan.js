export class Fan {
  constructor(game) {
    this.game = game;
    this.angle = 0;
    this.speed = 0.1;

    this.img = document.getElementById('fan1');
  }

  update() {
    this.angle += this.speed;
    if (this.angle == 360) {
      this.angle = 0;
    }
  }

  draw(context) {
    const clip = 30;
    let w = this.game.width / 2;
    let h = this.game.height / 2;
    context.translate(w, h);
    context.rotate(Math.PI / 180 * this.angle);
    context.translate(-w, -h);

    context.drawImage(this.img, 0, 0, this.img.width, this.img.height, -clip, -clip, this.game.width + 2*clip, this.game.height + 2*clip);
    context.setTransform(1, 0, 0, 1, 0, 0);    
  }
}
