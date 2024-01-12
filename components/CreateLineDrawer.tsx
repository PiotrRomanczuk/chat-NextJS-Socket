export function createLineDrawer(
	canvas: HTMLCanvasElement,
	initialX: number
): () => void {
	const context = canvas.getContext('2d');
	if (!context) throw new Error('Unable to get 2D context');

	let x = initialX;
	let y = canvas.height;
	const lineLength = 100;

	return () => {
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.beginPath();
		context.moveTo(x, y);

		// Calculate the end point of the line, ensuring it doesn't go beyond the top of the canvas
		const endY = Math.max(y - lineLength, 0);

		context.lineTo(x, endY);
		context.stroke();

		y -= 10; // Move up by 10 pixels for the next line

		if (y < 0) {
			y = canvas.height;
			x = (Math.random() * canvas.width) / 2;
		}
	};
}
