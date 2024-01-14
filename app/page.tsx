import { CanvasComponent } from '@/components/CanvasComponent';
import { DisplayRandomServerNumber } from '@/components/DisplayRandomServerNumber';
import { SocketIndicator } from '@/components/socket-indicator';

export default function Home() {
	return (
		<main className='text-black flex justify-center flex-col items-center h-screen'>
			<h1>Hello from chat</h1>
			<SocketIndicator />
			<DisplayRandomServerNumber />
			<CanvasComponent />
		</main>
	);
}
