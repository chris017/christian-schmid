import React, { useEffect, useState } from "react";
import { useContractWrite, useAccount } from "wagmi";
import datajs from "../../data.json";
import { usePrepareContractWrite, useContractRead } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../components/styles/Home.module.css";


function SendMessage() {
  const [addressSend, setAddressSend] = useState("");
  const [message, setMessage] = useState("");
  const [args, setArgs] = useState<Array<string | undefined>>([]);
  const [addressError, setAddressError] = useState("");

  const { config } = usePrepareContractWrite({
    address: "0x65e68bDb2227Ab0Fc00b6C4a67bc4b158D997aE3",
    abi: datajs.abi,
    functionName: "sendMessage",
    args: args,
  });

  
  const { write } = useContractWrite(config);

  const { address, isConnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
    },
  });

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (/^[a-zA-Z0-9]*$/.test(input)) {
      setAddressSend(input);
      setAddressError("");
    } else {
      setAddressError("Address must be alphanumeric");
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const { data: messages } = useContractRead({
    address: "0x65e68bDb2227Ab0Fc00b6C4a67bc4b158D997aE3",
    abi: datajs.abi,
    functionName: "getMessagesForAddress",
    args: [address],
  });

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent form from submitting and causing navigation
    write?.();
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  let drawerContent;
  if (Array.isArray(messages) && messages.length > 0) {
    drawerContent = (
      <ul className="divide-y divide-gray-100">
        {messages.map((message, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">From: {message.sender}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Message: {message.message}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  } else if (isConnected) {
    // When wallet is connected but no messages
    drawerContent = <div>No messages found in your inbox.</div>;
  } else {
    // When wallet is not connected
    drawerContent = <div>Please make sure you are connected to your Wallet.</div>;
  }

  useEffect(() => {
    setArgs([addressSend, message]);
  }, [addressSend, message]);

  return (
    <div className="text-gray-600 flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 ">
      <form className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm" action="#" method="POST">
        <div>
          <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900 text-left">
            Address
          </label>
          <div className="mt-2">
            <input
              id="address"
              name="address"
              type="text"
              required
              placeholder="Receiver Address 0x.."
              value={addressSend}
              onChange={handleAddressChange}
              maxLength={42}
              pattern="^[a-zA-Z0-9]*$"
              className={addressError ? "input-error" : "pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"}
            />
            {addressError && <div className="error-message">{addressError}</div>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 text-left">
            Message
          </label>
          <div className="mt-2">
            <input
              id="message"
              name="message"
              type="text"
              required
              placeholder="Your Message"
              value={message}
              onChange={handleMessageChange}
              minLength={1}
              maxLength={150}
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-10 flex items-center gap-x-6">
          <button
            type="button"
            disabled={!addressSend || !message || !!addressError || !write}
            onClick={handleSubmit}
            className={`flex w-1/2 justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white ${styles.btn}`}
          >
            Send
          </button>
          <button
            onClick={toggleDrawer}
            aria-controls="drawer-bottom-example"
            type="button"
            className={`flex w-1/2  justify-center rounded-md px-3.5 py-2 text-sm font-semibold text-black border-2 border-black`}
            
          >
            Inbox <span aria-hidden="true"className="pl-2">→</span>
          </button>
        </div>
        <div className="flex w-full justify-center">
        <ConnectButton 
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'avatar',
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: false,
          }}
        />
       
        </div>
      </form>

      {isDrawerOpen && (
        <div
          id="drawer-bottom-example"
          className="fixed bottom-0 left-0 right-0 z-40 w-full max-h-[40vh] p-4 overflow-y-auto transition-transform bg-white"
          tabIndex={-1}
          aria-labelledby="drawer-bottom-label"
        >
          <button
            type="button"
            onClick={toggleDrawer}
            className="bg-red-700 text-white hover:bg-red-800 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
            aria-controls="drawer-bottom-example"
          >
            X
            <span className="sr-only">Close menu</span>
          </button>
          {drawerContent} 
        </div>
      )}
    </div>
  );
}

export default SendMessage;