var bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200)
  pageset()
  var sum = windowWidth*windowHeight/9000
  for (var i = 0; i < sum; i++) {
    bubble[i] = new Bubble(random(width), random(height), random(10, 100), i);
  }

}

function draw() {
  background(225)
  for (let b of bubble) {
    var num = 0;
    for (let other of bubble) {
      if (b.intersect(other) && b != other) {
        num++
        stroke(255, 100)
        line(b.x, b.y, other.x, other.y)
      }
    }
    b.changeColor(num)
    b.show()
    b.move()
    b.showNum(num)
  }
}
