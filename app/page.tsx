import { SocketIndicator } from '@/components/socket-indicator';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			Hello from chat
			<SocketIndicator />
		</main>
	);
}
