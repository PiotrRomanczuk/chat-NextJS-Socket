'use client';
import React, { useRef, useEffect } from 'react'; // Import the LineDrawer class
import useRandomNumber from '@/hooks/useRandomNumber';
import { LineDrawer } from './LineDrawer_Class';

export const CanvasComponent: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const randomNumber = useRandomNumber();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const lineDrawers: LineDrawer[] = Array(20)
			.fill(null)
			.map((_, index) => {
				const initialX = (index + 1) * (canvas.width / 22);
				return new LineDrawer(canvas, initialX);
			});

		const intervalId = setInterval(() => {
			lineDrawers.forEach((lineDrawer) => {
				lineDrawer.drawLine(randomNumber!);
			});

			// Create a new LineDrawer for each line
			lineDrawers.forEach((lineDrawer, index) => {
				if (lineDrawer.getY() < 0) {
					const initialX = (index + 1) * (canvas.width / 22);
					lineDrawers[index] = new LineDrawer(canvas, initialX);
				}
			});
		}, 30);

		return () => clearInterval(intervalId);
	}, [randomNumber]);

	return (
		<canvas
			ref={canvasRef}
			width={1200}
			height={800}
			style={{ border: '1px solid black' }}
		></canvas>
	);
};
