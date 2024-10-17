class Svg {
  constructor(shape, text, colorText) {
    this.shape = shape;
    this.text = text;
    this.colorText = colorText;
  }
  render() {
    return `<svg version="1.1" width="${this.shape.svgWidth}" height="${
      this.shape.svgHeight
    }" xmlns="http://www.w3.org/2000/svg">
    
${this.shape.render()}
  <text x="${this.shape.textX}" y="${
      this.shape.textY
    }" font-size="60" text-anchor="middle" fill="${this.colorText}">${
      this.text
    }</text>

</svg>`;
  }
}
module.exports = Svg;
