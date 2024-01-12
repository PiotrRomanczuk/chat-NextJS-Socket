import { useEffect } from 'react';
import { useSocket } from '../providers/socket-provider';
import { handleRandomNumberEvent } from '../providers/socket-provider'; // Adjust the import path accordingly

export const ExternalComponent: React.FC = () => {
	const { socket } = useSocket();

	useEffect(() => {
		if (socket) {
			handleRandomNumberEvent(socket, (number) => {
				// Custom logic when receiving a random number
				console.log('External component received random number:', number);
			});
		}
	}, [socket]);
};
