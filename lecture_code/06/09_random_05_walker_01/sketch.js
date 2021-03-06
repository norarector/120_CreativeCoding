var ball_x;
var ball_y;
var ball_width = 80;

var max_ball_mvt = 2;

function setup() {
    createCanvas( windowWidth, windowHeight );
    background(255);

    ball_x = width * 0.5;
    ball_y = height * 0.5;
}

function draw() {

    // draw the ball
    fill( 'rgba(37, 141, 159, 0.1)' );
    ellipse(ball_x, ball_y, ball_width, ball_width);

    // we want to randomly update the position of the ball
    ball_x += random(-max_ball_mvt, max_ball_mvt);
    ball_y += random(-max_ball_mvt, max_ball_mvt);
}
