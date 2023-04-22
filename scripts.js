// levels
var testlevel1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 5, 6, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

];

var level1 = [
    [0, 0, 0, 0, 0, 0, 6, 7, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 6, 3, 3, 0],
    [0, 4, 0, 3, 5, 3, 3, 0, 4, 0],
    [0, 0, 6, 5, 0, 0, 0, 0, 0, 0],
    [0, 5, 6, 2, 4, 3, 3, 0, 0, 0],
    [0, 1, 6, 1, 0, 3, 6, 4, 0, 0],
    [0, 0, 7, 2, 3, 2, 2, 7, 0, 0],
    [0, 3, 2, 3, 4, 3, 2, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var level2 = [
    [7, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 1, 2, 0, 0, 6, 0, 0, 0, 0],
    [7, 0, 5, 5, 6, 5, 3, 6, 6, 0],
    [0, 0, 3, 3, 6, 3, 0, 1, 0, 0],
    [0, 4, 2, 4, 0, 0, 2, 3, 0, 0],
    [0, 4, 2, 0, 3, 3, 0, 0, 0, 0],
    [7, 7, 2, 0, 0, 3, 1, 0, 0, 0],
    [0, 7, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 7, 6, 1, 0, 0, 6, 0],
    [0, 0, 0, 0, 6, 0, 0, 0, 0, 0]
];

var level3 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 2, 3, 3, 3],
    [0, 6, 5, 3, 1, 4, 3, 0, 0, 0],
    [0, 7, 3, 0, 0, 3, 0, 1, 0, 0],
    [0, 0, 2, 6, 5, 0, 2, 3, 0, 0],
    [0, 1, 0, 0, 3, 5, 1, 4, 0, 0],
    [0, 0, 2, 0, 0, 3, 1, 3, 0, 0],
    [0, 0, 3, 3, 3, 3, 2, 1, 0, 0],
    [0, 0, 1, 0, 5, 1, 3, 2, 0, 0],
    [0, 1, 3, 6, 6, 6, 7, 0, 0, 0]
];
var level4 = [
    [0, 0, 0, 0, 4, 0, 2, 3, 4, 0],
    [0, 1, 0, 6, 0, 0, 0, 3, 3, 3],
    [1, 3, 7, 3, 1, 7, 3, 0, 0, 0],
    [0, 6, 3, 1, 0, 3, 4, 1, 0, 0],
    [1, 4, 2, 2, 3, 0, 2, 3, 5, 0],
    [3, 1, 6, 7, 3, 6, 1, 0, 0, 0],
    [3, 5, 2, 6, 3, 0, 1, 3, 5, 0],
    [1, 2, 3, 0, 6, 0, 2, 2, 0, 0],
    [0, 4, 6, 6, 6, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var level5 = [
    [6, 4, 5, 5, 6, 3, 5, 5, 5, 6],
    [2, 6, 3, 5, 2, 4, 6, 3, 6, 2],
    [2, 3, 6, 2, 2, 3, 3, 6, 3, 2],
    [2, 1, 3, 6, 1, 3, 6, 3, 1, 2],
    [2, 1, 1, 3, 6, 6, 3, 1, 1, 2],
    [2, 1, 1, 3, 6, 6, 3, 1, 1, 2],
    [2, 1, 3, 6, 1, 1, 6, 3, 1, 2],
    [2, 3, 6, 1, 2, 4, 2, 6, 3, 2],
    [2, 6, 7, 7, 7, 1, 5, 6, 6, 2],
    [6, 5, 3, 1, 2, 4, 4, 5, 5, 6]
];
function sumLevelScore(bricks) {
    scoreSum = 0;
    for (i = 0; i < bricks.length; i++) {
        for (j = 0; j < bricks[0].length; j++) {
            scoreSum += bricks[i][j];
        }
    }
    return scoreSum;
}

var level = 4;
var levels = [level1, level2, level3, level4, level5];
var levelsScore = [sumLevelScore(level1), sumLevelScore(level2), sumLevelScore(level3), sumLevelScore(level4),
sumLevelScore(level5)];
var currentLevelScore = 0;
bricks = levels[4];

// canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Ball variables
var balls = [
    {
        x: canvas.width / 2,
        y: canvas.height - 30,
        dx: 0,
        dy: 0,
    },
];
var ballRadius = 5;


// Paddle variables
var paddleHeight = 10;
var paddleWidth = 70;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

// Brick variables
var brickRowCount = bricks.length;
var brickColumnCount = bricks[0].length;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

//PowerupVariable
var powerups = [];
var powerupWidth = 20;
var powerupHeight = 20;
var powerupDY = 0;


//Score variables
var scoreToLive = 0;
var score = 0;
var lives = 7;

// Functions
function drawBall() {
    for (let i = 0; i < balls.length; i++) {
        ctx.beginPath();
        ctx.arc(balls[i]['x'], balls[i]['y'], ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[r][c] != 0) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                if (bricks[r][c] == 1) {
                    ctx.fillStyle = "#FF5733";
                } else if (bricks[r][c] == 2) {
                    ctx.fillStyle = "#F1C40F";
                } else if (bricks[r][c] == 3) {
                    ctx.fillStyle = "#00FF7F";
                } else if (bricks[r][c] == 4) {
                    ctx.fillStyle = "#8f00ff";
                } else if (bricks[r][c] == 5) {
                    ctx.fillStyle = "#C0C0C0";
                } else if (bricks[r][c] == 6) {
                    ctx.fillStyle = "black";
                } else if (bricks[r][c] == 7) {
                    ctx.fillStyle = "#4169E1";
                }
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, canvas.width - 80, 20);
}
function drawLevel() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Level: " + (level + 1), canvas.width - 450, 20);
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, 8, 20);
}
function drawPowerup() {
    if (powerups.length > 0) {
        for (var i = 0; i < powerups.length; i++) {
            if (powerups[i]['type'] == 4) {
                ctx.fillStyle = "#8f00ff";
            } else if (powerups[i]['type'] == 5) {
                ctx.fillStyle = "#C0C0C0";
            } else if (powerups[i]['type'] == 6) {
                ctx.fillStyle = "black";
            }
            else if(powerups[i]['type'] == 7) {
                ctx.fillStyle = "#4169E1";
            }
            ctx.fillRect(powerups[i]['x'], powerups[i]['y'], powerupWidth, powerupHeight);
        }
    }
}
function movePowerup() {
    for (let i = 0; i < powerups.length; i++) {
        powerups[i]['y'] += powerupDY;
        if (powerups[i]['y'] > canvas.height) {
            powerups.splice(i, 1)
            continue
        }
        if (powerups[i]['x'] > paddleX && powerups[i]['x'] < paddleX + paddleWidth && powerups[i]['y'] >= canvas.height-powerupWidth) {

            if (powerups[i]['type'] == 4) {
                scoreToLive += 20;
                score += 20;
                if (scoreToLive >= 50) {
                    lives++;
                    scoreToLive -= 50;
                }
            } else if (powerups[i]['type'] == 5) {
                paddleWidth = Math.max(paddleWidth + 10, 40);
            } else if (powerups[i]['type'] == 6) {
                paddleWidth = Math.min(paddleWidth - 10, 50);
            } else if (powerups[i]['type'] == 7) {
                dx=balls[0]['dx'];
                dy=balls[0]['dy'];
                balls[0]['dy']>0? dy=-dy:{};
                balls.push({
                    x: paddleX,
                    y: canvas.height-paddleHeight -10,
                    dx: dx,
                    dy: dy,
                });
            }
            powerups.splice(i, 1)
            continue
        }
    }
}

function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            for (var p = 0; p < balls.length; p++) {
                var b = bricks[r][c];
                if (b != 0) {
                    var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                    var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                    if (balls[p]['x'] > brickX && balls[p]['x'] < brickX + brickWidth && balls[p]['y'] > brickY && balls[p]['y'] < brickY + brickHeight) {
                        balls[p]['dy'] = -balls[p]['dy'];
                        score++;
                        scoreToLive++;
                        currentLevelScore++;
                        if (bricks[r][c] == 4 || bricks[r][c]
                            == 5 || bricks[r][c] == 6) {
                            powerups.push({
                                x: brickX + brickWidth / 2 - powerupWidth / 2,
                                y: brickY + brickHeight / 2 - powerupHeight / 2,
                                type: bricks[r][c],
                            });
                            bricks[r][c] -= bricks[r][c];

                        }
                        bricks[r][c] <= 0 ? bricks[r][c] = 0 : bricks[r][c]--;
                        if (bricks[r][c] == 0) {
                            if (scoreToLive >= 50) {
                                lives++;
                                scoreToLive -= 50;
                            }
                        }
                        if (currentLevelScore >= levelsScore[level]) {
                            level++;
                            if (level > 4) {
                                alert("Congratulations! You win!");
                                document.location.reload();
                            }
                            lives++;
                            currentLevelScore = 0;
                            bricks = levels[level];
                            balls[0]['x'] = canvas.width / 2;
                            balls[0]['y'] = canvas.height - 30;
                            for (let i = 0; i < balls.length; i++) {
                                balls[i]['dx'] > 0 ? balls[i]['dx']++ : balls[i]['dx']--;
                                balls[i]['dy'] > 0 ? balls[i]['dy']++ : balls[i]['dy']++;
                            }
                            paddleX = (canvas.width - paddleWidth) / 2;
                        }
                    }
                }
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLevel();
    drawLives();
    drawPowerup();
    collisionDetection();
    for (var cv = 0; cv < balls.length; cv++) {
        if (balls[cv]['x'] + balls[cv]['dx'] > canvas.width - ballRadius || balls[cv]['x'] + balls[cv]['dx'] < ballRadius) {
            balls[cv]['dx'] = -balls[cv]['dx'];
        }
        if (balls[cv]['y'] + balls[cv]['dy'] < ballRadius) {
            balls[cv]['dy'] = -balls[cv]['dy'];
        } else if (balls[cv]['y'] + balls[cv]['dy'] > canvas.height - ballRadius) {
            if (balls[cv]['x'] > paddleX && balls[cv]['x'] < paddleX + paddleWidth) {
                balls[cv]['dy'] = -balls[cv]['dy'];
            }
            else {
                if (balls.length > 1) {
                    balls.splice(cv, 1);
                    continue
                }
                else {
                    lives--;
                    score--;
                    if (!lives) {
                        alert("Game over");
                        document.location.reload();
                    } else {
                        balls[cv]['x'] = canvas.width / 2;
                        balls[cv]['y'] = canvas.height - 100;
                        balls[cv]['dy'] > 0 ? balls[cv]['dy'] = -balls[cv]['dy'] : {}
                    }
                }
            }
        }
        if (powerups.length > 0) {
            movePowerup();
        }
        balls[cv]['x'] += balls[cv]['dx'];
        balls[cv]['y'] += balls[cv]['dy'];
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    requestAnimationFrame(draw);
}

// Event listeners

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Keyboard controls
function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
// Start game
draw();