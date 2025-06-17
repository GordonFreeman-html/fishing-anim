// Canvas Fishing Scene







// Setup canvas
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 400;
cnv.height = 400;

let speed = Math.floor(Math.random() * 5) + 1;
let speed2 = Math.floor(Math.random() * 5) + 1;
let fish = Math.floor(Math.random() * 5) + 1;
let fish2 = Math.floor(Math.random() * 5) + 1;

let fishingLineY = 200;
let isExtending = false


let cloudSpeed = 2
let cloudX = Math.floor(Math.random() * cnv.width);


//this is the event listener for when the e key is pressed
document.addEventListener('keydown', (fish) => {
  if (fish.key === 'e' && !isExtending) { //makes sure the line isnt extending already
    isExtending = true;
    fishingLineY = 400; 
    setTimeout(() => { // this is a timer from https://www.w3schools.com/jsref/met_win_settimeout.asp
      fishingLineY = 300; //resets the position
      isExtending = false; //this allows it to be extended again
    }, 1000);
  }
});

setInterval(loop, 20)

function loop(){
ctx.clearRect(0, 0, cnv.width, cnv.height);

if (fish >= cnv.width || fish <= 0) {
  speed = -speed;
}
fish += speed;

if (fish2 >= cnv.width || fish2 <= 0) {
  speed2 = -speed2;
}
fish2 += speed2;

if (cloudX >= cnv.width || cloudX <= -275) {
  cloudSpeed = -cloudSpeed;
}
cloudX += cloudSpeed;

// sun
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(75,50,20,0,2*Math.PI);
ctx.fill();

// clouds
let cloud = document.getElementById('cloud');
ctx.drawImage(cloud, cloudX, 40, 75, 50);
ctx.drawImage(cloud, cloudX + 100, 10, 75, 50);
ctx.drawImage(cloud, cloudX + 200, 50, 75, 50)

// Water
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,250,cnv.width,250);

// Pier and posts
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(0,200,250,25);

// loop the 4 posts
for (let i=5; i<=155; i+=50){
  ctx.fillRect(i,150,10,350);
}

// fisherperson
// head
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(250, 140, 15, 0, 2 * Math.PI);
ctx.stroke();

// torso
ctx.beginPath();
ctx.moveTo(248,155);
ctx.lineTo(243,195);
ctx.stroke();

// upper leg
ctx.beginPath();
ctx.moveTo(243,195);
ctx.lineTo(265,205);
ctx.stroke();

// lower leg
ctx.beginPath();
ctx.moveTo(265,205);
ctx.lineTo(270,230);
ctx.stroke();

// arm
ctx.beginPath();
ctx.moveTo(246,170);
ctx.lineTo(280,180);
ctx.stroke();

// fishing pole
ctx.strokeStyle = 'gray';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(275,190);
ctx.lineTo(350,100);
ctx.stroke();

// fishing lineTo
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(350, 100);
ctx.lineTo(350, fishingLineY);
ctx.stroke();

// fishhead 1
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(fish, 300, 10, 0, 2 * Math.PI);
ctx.fill();

// fishhead 2
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(fish2, 325, 10, 0, 2 * Math.PI);
ctx.fill();

// fishtail 1
ctx.beginPath();
ctx.moveTo(fish - 10, 300);
ctx.lineTo(fish - 20, 290);
ctx.lineTo(fish - 20, 310);
ctx.fill();

// fishtail 2
ctx.beginPath();
ctx.moveTo(fish2 - 10, 325);
ctx.lineTo(fish2 - 20, 315);
ctx.lineTo(fish2 - 20, 335);
ctx.fill();
}
