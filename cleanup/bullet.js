function Bullet(x_, y_, w_) {

  //initialize the bullet
  this.x = x_ + w_ / 2
  this.r = 15
  this.y = y_ - this.r
  this.location = createVector(this.x, this.y)
  this.velocity = createVector(random(2, 5), random(-5, -3))
  // this.acceleration = createVector(random(-1, 1), random(-1, 0))
  this.maxspeed = 6

  this.update = function() {
    // this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxspeed)
    this.location.add(this.velocity)
    // this.acceleration.mult(0)
  }

  this.show = function() {
    fill(0, 0, 0)
    ellipse(this.location.x, this.location.y, 2 * this.r)
  }

  this.checkEdge = function(x_, y_, w_) {
    if (this.location.x <= this.r || this.location.x >= windowWidth - this.r) {
      this.velocity.x = -this.velocity.x
    } else if (this.location.y <= this.r) {
      this.velocity.y = -this.velocity.y
    } else if (this.location.y >= y_ - this.r) {
      if (this.location.x > x_ && this.location.x < x_ + w_) {
        this.velocity.y = -abs(this.velocity.y)
        // this.velocity.x += (mouseX - pmouseX)/10
        // this.velocity.x = constrain(this.velocity.x,-this.maxspeed/2,this.maxspeed/2)
      } else if (this.location.y >= windowHeight + this.r) {
        background(200, 0, 100)
        fill(255)
        textSize(50)
        textAlign(CENTER)
        textLeading(70)
        text("YOU LOSE!\n≡(▔﹏▔)≡", windowWidth / 2, windowHeight / 2 - 70)

        fill(255, 150)
        textSize(25)
        text("Click to replay", windowWidth / 2, windowHeight / 2 + 70)
        fail.play()
        bgm.stop()
        gameover = true
        noLoop()
      }
    }
  }

  this.checkBump = function(other) {
    let d = dist(this.location.x, this.location.y, other.x, other.y)

    if (d < this.r + other.r) {
      return true
    } else {
      return false
    }

  }

  this.changeDirection = function(other) {
    var direct = p5.Vector.sub(this.location, other.location)

    var volume=map(direct.mag(),0,60,0,1)
    // print(volume)
    this.velocity.mult(-1)
    this.velocity.add(direct)

    knock.setVolume(volume);
    knock.play();

  }
}
