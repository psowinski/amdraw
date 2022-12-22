export class Background {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    const images = document.getElementById('images');
    this.countImages = images.children.length;
    
    this.change();
  }

  change() {
    this.id = Math.floor(Math.random() * this.countImages);
    this.img = document.getElementById('img' + this.id);
  }

  update() {
  }

  draw(context) {
    context.drawImage(this.img, 20, 20, this.width - 40, this.height - 40);
  }  
}