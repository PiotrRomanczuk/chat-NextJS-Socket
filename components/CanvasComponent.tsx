'use client';
// YourComponent.tsx
import React, { useRef, useEffect } from 'react';
import { createLineDrawer } from './CreateLineDrawer';

export const CanvasComponent: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const lineDrawers: (() => void)[] = Array(20)
			.fill(null)
			.map((index) => {
				const initialX = (index + 1) * (canvas.width / 22);
				return createLineDrawer(canvas, initialX);
			});

		const intervalId = setInterval(() => {
			lineDrawers.forEach((drawLine) => drawLine());
		}, 30);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<canvas
			ref={canvasRef}
			width={1200}
			height={800}
			style={{ border: '1px solid black' }}
		></canvas>
	);
};
