var serpiente;
var scl = 12;

var food;

function setup() {
  createCanvas(600, 600);
  serpiente = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

}

function mousePressed() {
  serpiente.total++;
}

function draw() {
  background(000);
  if (serpiente.eat(food)) {
    pickLocation();
  }
  serpiente.death();
  serpiente.update();
  serpiente.show();
  serpiente.velUp();

  fill(0, 150, 0);
  circle(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    serpiente.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    serpiente.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    serpiente.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    serpiente.dir(-1, 0);
  }
}