export function createLineDrawer(
	canvas: HTMLCanvasElement,
	initialX: number,
	initialLineWidth: number
): (lineWidth: number) => void {
	const context = canvas.getContext('2d');
	if (!context) throw new Error('Unable to get 2D context');

	let x = initialX;
	let y = canvas.height;

	return (lineWidth: number) => {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.beginPath();
		context.moveTo(x, y);

		const endY = Math.max(y - 100, 0);

		context.lineWidth = lineWidth; // Set the line width based on the parameter
		context.lineTo(x, endY);
		context.stroke();

		y -= 10;

		if (y < 0) {
			y = canvas.height;
			x = (Math.random() * canvas.width) / 2;
		}
	};
}
