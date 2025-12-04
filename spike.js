export class Spike{ 
    constructor(x, y, w, h, spikeHeight = 10, spikeWidth=10)
     {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.spikeHeight = spikeHeight;
    this.spikeWidth = spikeWidth; 
  }
  
draw() {
    // base platform
    fill(120);
    noStroke();
    rect(this.x, this.y, this.w, this.h);

    // spikes on top
    fill(120);
    noStroke();

    const topY = this.y;
    for (let sx = this.x; sx < this.x + this.w; sx += this.spikeWidth) {
      const x1 = sx;
      const x2 = sx + this.spikeWidth;
      const xm = sx + this.spikeWidth / 2;
      const yBase = topY;
      const yTip = topY - this.spikeHeight;

      triangle(x1, yBase, x2, yBase, xm, yTip);
    }
  }
}