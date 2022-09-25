// import "styles.css";

// document.getElementById("app").innerHTML = ``;
let rod1 = document.getElementById("rod1");
let rod2 = document.getElementById("rod2");
let ball = document.getElementById("ball");
let score = 0;
function rodMove(event) {
  let left = rod1.offsetLeft;

  if ((event.key == "a" || event.keyCode == "37") && left > -1) {
    // left movement of rods
    rod1.style.left = (left - 15).toString() + "px";
    rod2.style.left = (left - 15).toString() + "px";
  } else if ((event.key == "d" || event.keyCode == "39") && left <= 1084) {
    // right movement of rods
    rod1.style.left = (left + 15).toString() + "px";
    rod2.style.left = (left + 15).toString() + "px";
  }
}
//some variables for handeling ball movement
var leftMovement;
var upMovement;
var downMovement;
var rightMovement;
let moveLeft = false;
let moveRight = true;
let moveUp = true;
let moveDown = false;
// function to move the ball
function ballMove() {
  clearInterval(leftMovement);
  clearInterval(rightMovement);
  clearInterval(upMovement);
  clearInterval(downMovement);
  if (moveLeft) {
    leftMovement = setInterval(function () {
      let left = ball.offsetLeft;
      if (left <= -1) {
        moveLeft = false;
        moveRight = true;
        ballMove();
      }
      ball.style.left = (left - 1).toString() + "px";
    }, 1);
  }
  if (moveRight) {
    rightMovement = setInterval(function () {
      let left = ball.offsetLeft;
      if (left >= 1250) {
        moveLeft = true;
        moveRight = false;
        ballMove();
      }
      ball.style.left = (left + 1).toString() + "px";
    }, 1);
  }
  if (moveUp) {
    upMovement = setInterval(function () {
      let bottomRod = rod1.offsetTop + rod1.offsetHeight;
      let topBall = ball.offsetTop;
      let leftBall = ball.offsetLeft;
      let leftRod = rod1.offsetLeft;
      let rightRod = rod1.offsetWidth + leftRod;
      if (
        topBall == bottomRod &&
        leftBall >= leftRod - 1 &&
        leftBall <= rightRod + 1
      ) {
        moveUp = false;
        moveDown = true;
        ballMove();
      } else if (topBall + 22 == bottomRod) {
        clearInterval(leftMovement);
        clearInterval(rightMovement);
        clearInterval(upMovement);
        clearInterval(downMovement);
        let highScore = localStorage.getItem("highScore");
        if (highScore == null) {
          highScore = score;
          localStorage.setItem("highScore", score.toString());
          localStorage.setItem("player", "Rod 2");
        } else if (score > parseInt(highScore)) {
          highScore = score;
          localStorage.setItem("highScore", score.toString());
          localStorage.setItem("player", "Rod 2");
        }
        window.alert(
          `Rod 2 Wins with score of ${score}. Max Score is ${highScore}`
        );
      }
      ball.style.top = (topBall - 1).toString() + "px";
    }, 1);
  }
  if (moveDown) {
    downMovement = setInterval(function () {
      let topRod = rod2.offsetTop;
      let bottomBall = ball.offsetTop + ball.offsetHeight;
      let topBall = ball.offsetTop;
      let leftBall = ball.offsetLeft;
      let leftRod = rod2.offsetLeft;
      let rightRod = rod2.offsetWidth + leftRod;
      if (
        topRod == bottomBall &&
        leftBall >= leftRod - 1 &&
        leftBall <= rightRod + 1
      ) {
        moveUp = true;
        moveDown = false;
        ballMove();
      } else if (topRod == bottomBall - 22) {
        clearInterval(leftMovement);
        clearInterval(rightMovement);
        clearInterval(upMovement);
        clearInterval(downMovement);
        let highScore = localStorage.getItem("highScore");
        if (highScore == null) {
          highScore = score;
          localStorage.setItem("highScore", score.toString());
          localStorage.setItem("player", "Rod 1");
        } else if (score > parseInt(highScore)) {
          highScore = score;
          localStorage.setItem("highScore", score.toString());
          localStorage.setItem("player", "Rod 1");
        }
        window.alert(
          `Rod 1 Wins with score of ${score}. Max Score is ${highScore}`
        );
      }
      ball.style.top = (topBall + 1).toString() + "px";
    }, 1);
  }
}
//app function
let counter;
function app() {
  score = 0;
  counter = setInterval(function () {
    score++;
  }, 1000);
  document.addEventListener("keydown", rodMove);
  ballMove();
}

// function to initalize app
function initApp() {
  clearInterval(upMovement);
  clearInterval(rightMovement);
  clearInterval(downMovement);
  clearInterval(leftMovement);
  rod1.style.left = "44vw";
  rod2.style.left = "44vw";
  ball.style.left = "50vw";
  ball.style.top = "91vh";
  let highScore = localStorage.getItem("highScore");
  if (highScore === null) {
    window.alert("This is Your first Time");
  } else {
    let player = localStorage.getItem("player");
    window.alert(`${player} has the maximum score of ${highScore}`);
  }

  app();
}
// Enter key to use for calling initApp function
document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    initApp();
  }
});
