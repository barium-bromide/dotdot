let canvas = document.getElementById("game-canvas");
let context = canvas.getContext("2d");

const LINE_AMOUNT = 20;
const BOX_SIZE = 43;
const BOARD_LENGTH = BOX_SIZE * LINE_AMOUNT;
const VERTICAL_PADDING = (canvas.height - BOARD_LENGTH) / 2;
const HORIZONTAL_PADDING = (canvas.width - BOARD_LENGTH) / 2;

document.addEventListener("mousedown", placeDot);
document.addEventListener("mouseup", endPlaceDot);

context.fillStyle = "#ADD8E6";
context.fillRect(0, 0, canvas.width, canvas.height);
context.lineWidth = 3;

let mouseCoord = { x: 0, y: 0 };
let placing = false;

function getPosition(event) {
	let rect = canvas.getBoundingClientRect();
	const scaleX = canvas.width / rect.width;
	const scaleY = canvas.height / rect.height;
	mouseCoord.x = (event.clientX - rect.left) * scaleX;
	mouseCoord.y = (event.clientY - rect.top) * scaleY;
}

function placeDot(event) {
	if (placing == false) {
		placing = true;
		getPosition(event);
		context.beginPath();
		context.arc(mouseCoord.x, mouseCoord.y, 10, 0, 2 * Math.PI);
		context.fillStyle = "blue";
		context.fill();
	}
}

function endPlaceDot() {
	placing = false;
}

for (let i = 0; i < LINE_AMOUNT; i++) {
	context.beginPath();
	context.moveTo(HORIZONTAL_PADDING + i * BOARD_LENGTH / (LINE_AMOUNT - 1), VERTICAL_PADDING);
	context.lineTo(HORIZONTAL_PADDING + i * BOARD_LENGTH / (LINE_AMOUNT - 1), (canvas.height + BOARD_LENGTH) / 2);
	context.moveTo(HORIZONTAL_PADDING, VERTICAL_PADDING + i * BOARD_LENGTH / (LINE_AMOUNT - 1));
	context.lineTo((canvas.width + BOARD_LENGTH) / 2, VERTICAL_PADDING + i * BOARD_LENGTH / (LINE_AMOUNT - 1));
	context.stroke();
}
