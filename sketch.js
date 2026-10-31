// Amount of space between rows of kalo
let rowSpacing = 70;

// Amount of space between each plant in a row
let plantSpacing = 50;

// Array to store the starting base x-positions for each row of kalo
// Initialized with two rows
let kaloRows = [rowSpacing, rowSpacing * 2];



function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Background
  background(115, 85, 60);

  drawRow(kaloRows, height, plantSpacing)

  // On-screen stats & instructions
  noStroke();
  fill(255);
  textSize(14);
  text("p to plant a row (push)", 30, 40);
  text("u to undo the most recently planted row (pop)", 30, 55);
  text("h to harvest the row planted longest ago", 30, 70);


  text("X positions of rows: " + kaloRows, 30, height - 40);
}


function keyPressed() {

  // Plant a row at the next spacing increment
  if (key === 'p') {
    let lastX = kaloRows[kaloRows.length - 1]
    kaloRows.push(lastX + rowSpacing);
  }
  // Harvest the row that was planted first
  else if (key === 'h') {
    kaloRows.shift();
  }
  // Harvest the row that was planted most recently
  else if (key === 'u') {
    kaloRows.pop()
  }
}

