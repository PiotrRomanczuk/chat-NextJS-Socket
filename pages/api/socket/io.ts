/**
 * Initializes Socket.IO server by attaching it to the HTTP server
 * if it does not already exist.
 *
 * Exports ioHandler function that handles incoming requests to /api/socket/io
 * endpoint. Checks if Socket.IO server already exists on HTTP server.
 * If not, creates new Socket.IO server instance and attaches to HTTP server.
 *
 * Sets up Socket.IO server to have path of /api/socket/io and no trailing
 * slash. Saves Socket.IO server instance on HTTP server.
 */


import { Server as NetServer } from 'http';
import { NextApiRequest } from 'next';
import { Server as ServerIO } from 'socket.io';

import { NextApiResponseServerIo } from '@/types';

export const config = {
	api: {
		bodyParser: false,
	},
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
	console.log("Server started");

if (!res.socket.server.io) {
    console.log("Creating new Socket.IO server instance");
   try {
    const path = '/api/socket/io';
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
        path: path,
        addTrailingSlash: false,
    });

    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 11);
        console.log("Emitted random number:", randomNumber);
        io.emit("random number", randomNumber);
    }, 1000);

    res.socket.server.io = io;

   } catch (error) {
     console.error("Error setting up Socket.IO server:", error);
   } }


	res.end();
};

export default ioHandler;
