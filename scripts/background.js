var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function drawCircle(x, y, radius, colour) {
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2);
	c.fillStyle = colour;
	c.fill();
}


function drawGrid() {

}


class Grid {
	constructor(row_length) {
		this.row_length = row_length;
		this.spacing = window.innerWidth / row_length;
	}

	draw() {
		for (let i = this.spacing / 2; i < window.innerWidth; i += this.spacing) {
			for (let j = this.spacing / 2; j < window.innerHeight; j += this.spacing) {
				drawCircle(i, j, 1, 'rgba(200, 200, 200, 1)');
			}
		}
	}
}



grid = new Grid(50);
function animate() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	grid.draw();
	
}
animate();