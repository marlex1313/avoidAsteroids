var c = new Sceene();
var canvas = c.canvas;
var sceene = c.ctx;

var playing = true;

var player = new SpaceCraft(canvas.width*0.5,canvas.height - 100)

var asteroids = [];

function renderBorders() {
    sceene.beginPath();
    sceene.moveTo(canvas.width*0.5 - 300,0);
    sceene.lineTo(canvas.width*0.5 - 300,canvas.height);
    sceene.moveTo(canvas.width*0.5 + 300,0);
    sceene.lineTo(canvas.width*0.5 + 300,canvas.height);
    sceene.strokeStyle = "grey";
    sceene.stroke();
}

var timer = 0;

function addAsteroid() {
    timer++;
    if(timer == 100) {
        asteroids.push(new Asteroid(Math.random()*600 + canvas.width*0.5 - 300,0,Math.floor(Math.random() * (100 - 40 + 1) + 40)));
        timer = 0;
    }
}

function setup() {
    update()
}

function update() {
    sceene.clearRect(0,0,canvas.width,canvas.height);

    renderBorders();
    player.move();

    addAsteroid()
    Asteroid.updatePosition(asteroids);
    Asteroid.renderList(asteroids);
    
    player.render();

    Asteroid.checkColisions(asteroids);

    if(playing) {
        requestAnimationFrame(update);
    }
    else {
        sceene.fillStyle = "grey";
        sceene.fillRect(canvas.width*0.5 - 200,canvas.height*0.5 - 50,400,100);
        sceene.fillStyle = "black"
        sceene.shadowBlur = 0;
        sceene.font = "60px Arial";
        sceene.fillText("YOU LOST",canvas.width*0.5 - 160,canvas.height*0.5 + 30);
    }
}
