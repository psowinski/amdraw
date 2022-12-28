export class Background {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    const images = document.getElementById('images');
    this.countImages = images.children.length;
    this.id = -1;

    this.change();
  }

  change() {
    if (this.id < 0) {
      this.id = Math.floor(Math.random() * this.countImages);
    } else {
      ++this.id;
      if (this.id >= this.countImages) {
        this.id = 0;
      }
    }
    this.img = document.getElementById('img' + this.id);
  }

  update() {
  }

  draw(context) {
    context.drawImage(this.img, 20, 20, this.width - 40, this.height - 40);
  }  
}