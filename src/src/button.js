export class Button {
  constructor(color, x, y, width, height) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  hitTest(x, y) {
    return (x >= this.x && x <=(this.x + this.width) &&
            y >= this.y && y <=(this.y + this.height));
  }

  draw(context) {
    context.fillStyle = this.color.getStyle();
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class ImgButton {
  constructor(name, x, y) {
    this.img = document.getElementById(name);
    this.x = x;
    this.y = y;
  }

  hitTest(x, y) {
    return (x >= this.x && x <=(this.x + this.img.width) &&
            y >= this.y && y <=(this.y + this.img.height));
  }

  draw(context) {
    context.drawImage(this.img, this.x, this.y);
  }
}