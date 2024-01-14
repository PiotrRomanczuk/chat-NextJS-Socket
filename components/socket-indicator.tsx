'use client';

import { useSocket } from '@/components/providers/socket-provider';
import { Badge } from '@/components/ui/badge';

export const SocketIndicator = () => {
	const { isConnected } = useSocket();

	console.log(isConnected);

	if (!isConnected) {
		console.log('Socket Indicator: Connection status - Not connected');

		return (
			<Badge variant='outline' className='bg-yellow-600 text-white border-none'>
				Fallback: Polling every 1s
			</Badge>
		);
	}

	console.log('Socket Indicator: Connection status - Connected');

	return (
		<Badge variant='outline' className='bg-emerald-600 text-white border-none'>
			Live: Real-time updates
		</Badge>
	);
};
