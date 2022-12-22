export class InputHandler {
  
  constructor(canvas) {
    this.canvas = canvas;
    
    document.addEventListener('mousemove', e => this.onMouseEvent(e));
    document.addEventListener('mousedown', e => this.onMouseEvent(e));
    document.addEventListener('mouseup', e => this.onMouseEvent(e));
    document.addEventListener('touchstart', e => {
      e.preventDefault();
      this.init();

      let rect = this.canvas.getBoundingClientRect();
      let ex = e.touches[0].clientX;
      let ey = e.touches[0].clientY;

      this.mouse.x = ex - rect.left;
      this.mouse.y = ey - rect.top;
      this.mouse.lmb = true;
      this.mouse.canClick = true;
    });
    document.addEventListener('ontouchmove', e => {
      e.preventDefault();
      this.init();

      let rect = this.canvas.getBoundingClientRect();
      let ex = e.touches[0].clientX;
      let ey = e.touches[0].clientY;

      this.mouse.x = ex - rect.left;
      this.mouse.y = ey - rect.top;
      this.mouse.lmb = true;
    });
    document.addEventListener('ontouchend', e => {
      e.preventDefault();
      this.init();

      let rect = this.canvas.getBoundingClientRect();
      let ex = e.touches[0].clientX;
      let ey = e.touches[0].clientY;

      this.mouse.x = ex - rect.left;
      this.mouse.y = ey - rect.top;
      this.mouse.lmb = false;
      this.mouse.canClick = true;
    });
    document.addEventListener('ontouchcancel', e => {
      e.preventDefault();
      this.init();
      this.mouse.lmb = false;
      this.mouse.canClick = true;
    });              
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

  init() {
    if (!this.mouse) {
      this.mouse = {x: 0, y: 0, lmb: false, click: false, canClick: true};
    }
  }

  onMouseEvent(e) {
    this.init();

    let rect = this.canvas.getBoundingClientRect();

    this.mouse.x = e.x - rect.left;
    this.mouse.y = e.y - rect.top;
    this.mouse.lmb = e.buttons & 1;
    if (!this.mouse.canClick && !this.mouse.lmb) {
      this.mouse.canClick= true;
    }
  }
}