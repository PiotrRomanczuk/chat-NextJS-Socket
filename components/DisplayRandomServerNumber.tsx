'use client';

import React from 'react';
import useRandomNumber from '@/hooks/useRandomNumber';

export const DisplayRandomServerNumber = () => {
	const randomNumber = useRandomNumber();

	return (
		<div>
			<h1>Random SERVER Number: {randomNumber}</h1>
		</div>
	);
};
