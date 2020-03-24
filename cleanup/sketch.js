var bubble = []
let x, y, w, h
let margin
let bar
let bullet
let gameover

var knock, fail, pass, bgm

function preload() {
  knock = loadSound('../audio/knock.mp3')
  fail = loadSound('../audio/fail.mp3')
  pass = loadSound('../audio/pass.mp3')
  bgm = loadSound('../audio/bgm.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(220)
  pageset()
  gameover = false
  //initialize the bubbles
  for (var i = 0; i < 20; i++) {
    bubble[i] = new Bubble();
  }
  fail.setVolume(0.3)
  pass.setVolume(0.3)
  bgm.setVolume(0.05)
  bgm.loop()
  bgm.rate(0.5)
  //initialize the bouncing bar
  margin = 10
  w = 50
  h = 20
  x = windowWidth / 2
  y = windowHeight - h - margin

  //initialize the bullet
  bullet = new Bullet(x, y, w)
}

function draw() {
  background(237)

  //show the bubbles
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].show()
  }
  for (let i = 0; i < bubble.length; i++) {
    if (bullet.checkBump(bubble[i])) {
      bullet.changeDirection(bubble[i])
      // bullet.update()
      bubble.splice(i, 1)
    }
  }

  //show the bar
  fill(55)
  bar = rect(x, y, w, h)

  //show the Bullet
  bullet.update()
  bullet.checkEdge(x, y, w)
  bullet.show()

  if (bubble.length < 1) {
    background(0, 200, 100)
    fill(255)
    textSize(50)
    textAlign(CENTER)
    textLeading(70)
    text("YOU WIN!\nO(∩_∩)O", windowWidth / 2, windowHeight / 2 - 70)
    fill(255, 150)
    textSize(25)
    text("Click to replay", windowWidth / 2, windowHeight / 2 + 70)
    pass.play()
    bgm.stop()
    gameover = true
    noLoop()
  }

}

function mouseDragged() {
  x += mouseX - pmouseX
  x = constrain(x, 0, windowWidth - w)
}

function touchMoved() {
  x += mouseX - pmouseX
  x = constrain(x, 0, windowWidth - w)
}

function mouseClicked() {
  if (gameover) {
    location.reload()
  }
}

function touchStarted() {
  if (gameover) {
    location.reload()
  }
}
