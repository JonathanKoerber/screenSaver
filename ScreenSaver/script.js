const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const logo = {
	width: 180,
	height: 90,
	x: 100,
	y: 80,
	vx: 3,
	vy: 2.5,
	color: randomColor(),
};

function randomColor() {
	const hue = Math.floor(Math.random() * 360);
	return `hsl(${hue}, 95%, 60%)`;
}

function drawLogo() {
	ctx.fillStyle = logo.color;
	ctx.fillRect(logo.x, logo.y, logo.width, logo.height);

	ctx.fillStyle = "#101010";
	ctx.font = "bold 28px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("SCREENSAVER", logo.x + logo.width / 2, logo.y + logo.height / 2);
}

function updateLogoPosition() {
	logo.x += logo.vx;
	logo.y += logo.vy;

	let bounced = false;

	if (logo.x <= 0) {
		logo.x = 0;
		logo.vx *= -1;
		bounced = true;
	}

	if (logo.x + logo.width >= canvas.width) {
		logo.x = canvas.width - logo.width;
		logo.vx *= -1;
		bounced = true;
	}

	if (logo.y <= 0) {
		logo.y = 0;
		logo.vy *= -1;
		bounced = true;
	}

	if (logo.y + logo.height >= canvas.height) {
		logo.y = canvas.height - logo.height;
		logo.vy *= -1;
		bounced = true;
	}

	if (bounced) {
		logo.color = randomColor();
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	updateLogoPosition();
	drawLogo();
	requestAnimationFrame(animate);
}

animate();
