export class LineDrawer {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private x: number;
	private y: number;

	constructor(canvas: HTMLCanvasElement, initialX: number) {
		this.canvas = canvas;
		this.context = canvas.getContext('2d')!;
		if (!this.context) {
			throw new Error('Unable to get 2D context');
		}

		this.x = initialX;
		this.y = canvas.height;
	}

	drawLine(lineWidth: number): void {
		this.context.beginPath();
		this.context.moveTo(this.x, this.y);

		const endY = Math.max(this.y - 100, 0);

		this.context.lineWidth = lineWidth;
		this.context.lineTo(this.x, endY);
		this.context.stroke();

		this.y -= 10;

		// Reset the y position when it goes below a threshold
		if (this.y < 0) {
			this.y = this.canvas.height;
		}
	}

	getY(): number {
		return this.y;
	}
}

export default LineDrawer;
