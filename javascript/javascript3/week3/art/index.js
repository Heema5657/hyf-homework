//Paint a circle to canvas element.
const body = document.querySelector("body");
const canvas = document.querySelector("canvas");
canvas.width = "700";
canvas.height = "475";
const x = canvas.width / 2;
const y = canvas.height / 2;
const r = 120;
const ctx = canvas.getContext("2d");
ctx.lineWidth = "4";
ctx.strokeStyle = "grey";
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

// Class creation
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillColor
    );
    ctx.fillStyle = this.fillColor;
    ctx.lineWidth = "5";
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.fill();
  }
}
const c1 = new Circle(90, 100, 50, 0, 2 * Math.PI, "blue");
c1.draw();

// Now lets make art. Every 100ms create a new circle with random x,y,r and colour
setInterval(() => {
  const c1 = new Circle(
    Math.floor(Math.random() * ctx.canvas.width),
    Math.floor(Math.random() * ctx.canvas.height),
    Math.floor(Math.random() * 50),
    0,
    2 * Math.PI,
    "#" + Math.floor(Math.random() * 0xffffff).toString(16)
  );
  c1.draw();
}, 100);
