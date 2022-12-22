export class InputHandler {
  
  constructor(canvas) {
    this.canvas = canvas;
    
    document.addEventListener('mousemove', e => this.onMouseEvent(e));
    document.addEventListener('mousedown', e => this.onMouseEvent(e));
    document.addEventListener('mouseup', e => this.onMouseEvent(e));
  }

  update() {
    if (this.mouse) {
      if (this.mouse.click) {
        this.mouse.click = false;
      } else if (this.mouse.lmb && this.mouse.canClick) {
        this.mouse.click = true;
        this.mouse.canClick = false;
      }
    }
  }

  onMouseEvent(e) {
    if (!this.mouse) {
      this.mouse = {x: 0, y: 0, lmb: false, click: false, canClick: true};
    }

    let rect = this.canvas.getBoundingClientRect();

    this.mouse.x = e.x - rect.left;
    this.mouse.y = e.y - rect.top;
    this.mouse.lmb = e.buttons & 1;
    if (!this.mouse.canClick && !this.mouse.lmb) {
      this.mouse.canClick= true;
    }
  }
}