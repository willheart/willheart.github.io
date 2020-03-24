function Bubble(x, y, r, n) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.n = String(n);
  var c = color(0, 30)
  this.move = function() {
    this.x += random(-1, 1)
    this.y += random(-1, 1)
  }

  this.intersect = function(other) {
    var d = dist(this.x, this.y, other.x, other.y)
    if (d < this.r + other.r) {
      return true
    }
  }
  this.changeColor = function(num) {
    if (num > 0) {
      c = color(100, 0, 100, 15 * num + 30)
      stroke(150, 0, 100)
    } else {
      c = color(0, 30)
      stroke(0, 200);
    }

  }

  this.showNum = function(num) {
    textFont('arial')
    textSize(16)
    fill(255,200)
    noStroke()
    textAlign(CENTER);
    text(String(num), this.x, this.y+5 )
    textSize(12)
    fill(255,120)
    text("No."+this.n, this.x, this.y+18 )
  }

  this.show = function() {
    fill(c);
    strokeWeight(0.5)
    ellipse(this.x, this.y, 2 * this.r);
  }
}
