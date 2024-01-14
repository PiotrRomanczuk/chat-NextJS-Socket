'use client';
import React, { useRef, useEffect } from 'react';
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
			.map(() => {
				const initialX = canvas.width / 2; // Set initialX to half of the canvas width
				return new LineDrawer(canvas, initialX);
			});

		const intervalId = setInterval(() => {
			const context = canvas.getContext('2d');
			if (!context) return;

			lineDrawers.forEach((lineDrawer) => {
				lineDrawer.drawLine(randomNumber!);
			});

			lineDrawers.forEach((lineDrawer, index) => {
				if (lineDrawer.getY() < 0) {
					const initialX = canvas.width / 2; // Set initialX to half of the canvas width
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
