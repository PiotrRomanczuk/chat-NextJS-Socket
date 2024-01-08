import { DisplayRandomServerNumber } from '@/components/DisplayRandomServerNumber';
import { SocketIndicator } from '@/components/socket-indicator';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen py-2'>
			Hello from chat
			<SocketIndicator />
			<DisplayRandomServerNumber />
		</main>
	);
}
