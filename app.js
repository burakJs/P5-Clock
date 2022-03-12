let hr_d = 260;
let mn_d = 280;
let sc_d = 300;
let hr, mn, sc;
let hr_end, mn_end, sc_end;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  stroke(255, 0, 0);
  strokeWeight(10);
  noFill();
  hr_end = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, hr_d, hr_d, 0, hr_end);

  push();
  rotate(hr_end);
  line(0, 0, hr_d / 4, 0);
  pop();

  stroke(0, 255, 0);
  noFill();
  mn_end = map(mn, 0, 60, 0, 360);
  arc(0, 0, mn_d, mn_d, 0, mn_end);

  push();
  rotate(mn_end);
  line(0, 0, mn_d / 3.5, 0);
  pop();

  stroke(0, 0, 255);
  noFill();
  sc_end = map(sc, 0, 60, 0, 360);
  arc(0, 0, sc_d, sc_d, 0, sc_end);

  push();
  rotate(sc_end);
  line(0, 0, sc_d / 3, 0);
  pop();

  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);
  textSize(32);
  rotate(90);
  fill(255);
  text(hr + ":" + mn + ":" + sc, -width / 2 + 10, -height / 2 + 40);

  fill(255);
  noStroke();
  circle(0, 0, 15);
}
