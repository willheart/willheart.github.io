function Bubble() {
  this.r = random(10, 40);
  this.x = random(this.r, windowWidth - this.r);
  this.y = random(this.r, windowHeight - 300);
  this.location = createVector(this.x, this.y)
  var c = color(random(160), random(160), random(160), 150)
  var a = random(100);
  var b = random(1000);

  this.move = function() {
    this.x += (noise(a))
    this.y += (noise(b))
    a++
    b--
  }

  this.intersect = function(other) {
    var d = dist(this.x, this.y, other.x, other.y)
    if (d < this.r + other.r) {
      return true
    }
  }

  this.show = function() {
    noFill();
    stroke(c)
    strokeWeight(4)
    ellipse(this.x, this.y, 2 * this.r);
    noStroke()
  }
}
