// useRandomNumber.js

import { useSocket } from "@/components/providers/socket-provider";
import { useEffect } from "react";

const useRandomNumber = () => {
  const { randomNumber, subscribeToRandomNumber } = useSocket();

  useEffect(() => {
    const handleRandomNumber = (number: number) => {
      // Do something with the received number, e.g., display it in a component
      console.log('Handling random number in external file:', number);
    };

    //hello
    // Subscribe to random number events
    subscribeToRandomNumber(handleRandomNumber);

    // Cleanup on unmount or if needed
    return () => {
      // Unsubscribe if needed
      // socket.off('random number', handleRandomNumber);
    };
  }, [subscribeToRandomNumber]);

  return randomNumber;
};

export default useRandomNumber;
