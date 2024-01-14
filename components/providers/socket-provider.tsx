'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { io as ClientIO } from 'socket.io-client';

type SocketContextType = {
	socket: any | null;
	isConnected: boolean;
	randomNumber: number | null;
	subscribeToRandomNumber: (callback: (number: number) => void) => void;
};

const SocketContext = createContext<SocketContextType>({
	socket: null,
	isConnected: false,
	randomNumber: null,
	subscribeToRandomNumber: () => {},
});

export const useSocket = () => {
	// console.log(SocketContext);
	return useContext(SocketContext);
};

export const handleRandomNumberEvent = (
	socketInstance: any,
	setRandomNumber: React.Dispatch<React.SetStateAction<number | null>>
) => {
	socketInstance.on('random number', (number: number) => {
		setTimeout(() => {
			setRandomNumber(number);
			console.log('Received random number:', number);
		}, 1000);
	});
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
	const [socket, setSocket] = useState<any | null>(null);
	const [isConnected, setIsConnected] = useState(false);
	const [randomNumber, setRandomNumber] = useState<number | null>(null);

	useEffect(() => {
		const socketInstance = ClientIO('http://localhost:3000', {
			path: '/api/socket/io',
			// addTrailingSlash is not a valid option, you can remove it
		});

		socketInstance.on('connect', () => {
			setIsConnected(true);
			console.log('Connected to server');
		});

		socketInstance.on('disconnect', () => {
			setIsConnected(false);
			console.log('Disconnected from server');
		});

		socketInstance.on('random number', (number: number) => {
			setTimeout(() => {
				setRandomNumber(number);
				console.log('Received random number:', number);
			}, 1000);
		});

		setSocket(socketInstance);

		return () => {
			socketInstance.disconnect();
		};
	}, []);

	const subscribeToRandomNumber = (callback: (number: number) => void) => {
		socket?.on('random number', callback);
	};

	return (
		<SocketContext.Provider
			value={{
				socket,
				isConnected,
				randomNumber,
				subscribeToRandomNumber,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};
