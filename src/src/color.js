export class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  getStyle(alpha) {
    if (!alpha) { 
      alpha = 1.0;
    }
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`;
  }
}

export const Colors = {
    Red: new Color(255, 0, 0, 'red'),
    LawnGreen: new Color(124, 252, 0, 'lawngreen'),
    DodgerBlue: new Color(30, 144, 255, 'dodgerblue'),
    DeepPink: new Color(255, 20, 147, 'deeppink'),
    Yellow: new Color(255, 255, 0, 'yellow')
}
