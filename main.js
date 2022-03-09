function preload() {
    img = loadImage('Puppy.jpg');
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw() {
    image (img, 0, 0, 640, 420);
    fill("#FF0000")
    text("Dog", 45,75);
    noFill();
    stroke("#FF0000");
    rect(10, 10, 300, 300 );
    text("Dog", 400,50);
    rect(350, 10, 250, 500 );
}