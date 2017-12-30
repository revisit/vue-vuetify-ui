const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const rectSize = 50;

// eslint-disable-next-line
function draw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = 'rgba(100,0,100,1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'red';
  ctx.fillRect(0, (canvas.height - rectSize) / 2.0, rectSize, rectSize);
  // canvas.width * (vueapp.time / vueapp.totalTime),
}

draw();
