var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var screenWidth = Math.floor(screen.width - ((screen.width/100)*10));
var screenHeight = Math.floor(screen.height - ((screen.height/100)*30));

// document.querySelector('.garden').style.width = 80+'vw';
// document.querySelector('.garden').style.height = screenHeight+'vh';

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180)
  var y = event.gamma; // In degree in the range [-90,90)

  output.textContent  = `beta : ${x}\n`;
  output.textContent += `gamma: ${y}\n`;

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  // ball.style.top  = (maxY*y/180 - 10) + "px";
  // ball.style.left = (maxX*x/180 - 10) + "px";
  ball.style.left  = (maxY*y/180 - 10) + "px";
  ball.style.top = (maxX*x/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);

var checkboxStatus = document.createElement('input');
checkboxStatus.setAttribute('type', 'checkbox');
checkboxStatus.setAttribute('id', 'status');

document.querySelector('#color').parentElement.append(checkboxStatus);

document.querySelector('#status').addEventListener('change', event => {
  if(event.target.checked) {
    document.body.style.backgroundColor = document.querySelector('#color').value;
  }
});
function changeColor() {
  if(document.querySelector('#status').checked) {
    document.body.style.backgroundColor = document.querySelector('#color').value;
  }
}
