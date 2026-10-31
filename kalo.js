
function drawKaloFancy(x, y, size = 1) {
  noStroke();
  fill(106, 87, 63);
  ellipse(x, y + size * 0.1, 95 * size, 20 * size);

  push();
  translate(x, y);
  scale(size);

  // Stems
  stroke(65, 110, 50);
  strokeWeight(5);
  line(0, 0, -65, -140);
  line(0, 0, 60, -170);
  line(0, 0, 0, -220);

  // Leaves
  drawKaloLeafFancy(-65, -140, -0.5);
  drawKaloLeafFancy(60, -170, 0.5);
  drawKaloLeafFancy(0, -220, 0);

  pop();
}

function drawKaloLeafFancy(x, y, angle) {

  

  push();
  translate(x, y);
  rotate(angle);

  fill(45, 135, 65);
  stroke(65, 110, 50);
  strokeWeight(2);

  // Simple heart-shaped leaf
  beginShape();
  vertex(0, -20);  // Notch
  vertex(-25, -40);
  vertex(-45, -25);
  vertex(-40, 10);
  vertex(0, 65);   // Point
  vertex(40, 10);
  vertex(45, -25);
  vertex(25, -40);
  endShape(CLOSE);

  // Leaf veins
  line(0, 0, 0, 55);
  line(0, 0, -30, -20);
  line(0, 0, 30, -20);
  line(0, 20, -25, 10);
  line(0, 20, 25, 10);

  pop();
}

function drawKaloSimple(x, y) {

  noStroke();
  fill(106, 87, 63);
  ellipse(x, y + 5, 105, 18);

  push();
  translate(x, y);

  stroke(65, 110, 50);
  strokeWeight(4);

  // Two stems
  line(0, 0, -50, -110);
  line(0, 0, 20, -170);

  drawLeafSimple(-50, -110, -0.5);
  drawLeafSimple(20, -170, 0);

  pop();
}

function drawLeafSimple(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);

  fill(45, 135, 65);
  beginShape();
  vertex(0, -15);
  vertex(-30, -30);
  vertex(-40, 0);
  vertex(0, 55);
  vertex(40, 0);
  vertex(30, -30);
  endShape(CLOSE);

  line(0, 0, 0, 45);
  pop();
}