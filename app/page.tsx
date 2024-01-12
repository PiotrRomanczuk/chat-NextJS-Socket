import { CanvasComponent } from '@/components/CanvasComponent';
import { DisplayRandomServerNumber } from '@/components/DisplayRandomServerNumber';
import { SocketIndicator } from '@/components/socket-indicator';
import Image from 'next/image';
export default function Home() {
	<main>
		Hello from chat
		<SocketIndicator />
		<DisplayRandomServerNumber />
		<CanvasComponent />
	</main>;
}
