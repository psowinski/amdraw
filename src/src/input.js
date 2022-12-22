export class InputHandler {
  
  constructor(canvas) {
    this.canvas = canvas;

    this.x = 0;
    this.y = 0;
    this.pressed = false;
    this.clicked = false;
    this.state = {x: 0, y: 0, pressed: false};

    document.addEventListener('mousedown', e => {
      e.preventDefault();
      this.setMousePosition(e);
      this.state.pressed = true;
    });
    document.addEventListener('mousemove', e => {
      e.preventDefault();
      this.setMousePosition(e)
    });
    document.addEventListener('mouseup', e => {
      e.preventDefault();
      this.setMousePosition(e);
      this.state.pressed = false;
    });

    document.addEventListener('touchstart', e => {
      e.preventDefault();
      this.setTouchPosition(e);
      this.state.pressed = true;
    });
    document.addEventListener('touchmove', e => {
      e.preventDefault();
      this.setTouchPosition(e)
    });
    document.addEventListener('touchend', e => {
      e.preventDefault();
      this.setTouchPosition(e);
      this.state.pressed = false;
    });
    document.addEventListener('touchcancel', e => {
      e.preventDefault();
      this.state.pressed = false;
    });
  }

  setMousePosition(e) {
    this.state.x = e.x;
    this.state.y = e.y;
  }

  setTouchPosition(e) {
    if (e.touches && e.touches.length > 0) {
      this.state.x = e.touches[0].clientX;
      this.state.y = e.touches[0].clientY;
    }
  }

  update() {
    let rect = this.canvas.getBoundingClientRect();

    this.x = this.state.x - rect.left;
    this.y = this.state.y - rect.top;
    
    if (this.pressed && !this.state.pressed) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
    
    this.pressed = this.state.pressed;
  }
}