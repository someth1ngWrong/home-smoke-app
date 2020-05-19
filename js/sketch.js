function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas");
    background(255);
}

// function draw() {
//     fill(255, 15);
//     noStroke();
//     rect(0, 0, windowWidth, windowHeight);
//
//     stroke(0);
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }

let ball = {
  x: 100,
  y: 100,
  xspeed: 8,
  yspeed: 6,
  }
let ball2 = {
  x: 100,
  y: 300,
  xspeed: 12,
  yspeed: 1,
}
let ball3 = {
  x: 200,
  y: 300,
  xspeed: 12,
  yspeed: 10,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
  display1()
  move1()
  bounce1()
  display()
  move()
  bounce()

}

function display1 () {
  fill(0);
  ellipse(ball.x, ball.y, 60, 60);

}

function move1 () {
  ball.x = ball.x + ball.xspeed
  ball.y = ball.y + ball.yspeed

}

function bounce1 () {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * - 1
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * - 1
  }

}
function display () {
  fill(255);
  ellipse(ball2.x, ball2.y, 100, 100);

}

function move () {
  ball2.x = ball2.x + ball2.xspeed
  ball2.y = ball2.y + ball2.yspeed

}

function bounce () {
  if (ball2.x > width || ball2.x < 0) {
    ball2.xspeed = ball2.xspeed * - 1
  }
  if (ball2.y > height || ball2.y < 0) {
    ball2.yspeed = ball2.yspeed * - 1
  }
}












// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
