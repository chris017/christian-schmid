"use client"
import { useWeb3ModalTheme } from "@web3modal/wagmi/react";
import { useTheme } from "next-themes"; // Import the useTheme hook
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContractWrite, useAccount, useWaitForTransaction } from "wagmi";
import datajs from "../data.json";
import { usePrepareContractWrite, useContractRead } from "wagmi";
import Link from "next/link";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import { useSignMessage } from 'wagmi'

export default function Dashboardside() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setIsDarkMode(theme === "dark"); // Update the dark mode based on the theme
      }, [theme]);


    const { themeMode, themeVariables, setThemeMode, setThemeVariables } = useWeb3ModalTheme();

   
    setThemeMode(isDarkMode ? "dark" : "light",);
    const [addressSend, setAddressSend] = useState("");
  const [message, setMessage] = useState("");
  const [args, setArgs] = useState<Array<string | undefined>>([]);
  const [addressError, setAddressError] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");
  const [isTransactionInProgress, setIsTransactionInProgress] = useState(false);

  const { config } = usePrepareContractWrite({
    address: "0x65e68bDb2227Ab0Fc00b6C4a67bc4b158D997aE3",
    abi: datajs.abi,
    functionName: "sendMessage",
    args: args,
  });

  const { write, data: writeData } = useContractWrite(config);

  const { status } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  useEffect(() => {
    if (writeData?.hash) {
      // Transaction has been initiated, start waiting for the result
      setIsTransactionInProgress(true);
      // Clear form fields
      setAddressSend("");
      setMessage("");
    }

    if (status === 'success') {
      setIsTransactionInProgress(false);
      setTransactionStatus('Transaction successful!');
      
      // Set a timeout to clear the success message after 5 seconds
      const timer = setTimeout(() => {
        setTransactionStatus('');
      }, 5000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    } else if (status === 'error') {
      setIsTransactionInProgress(false);
      setTransactionStatus('Transaction failed.');
      // Set a timeout to clear the success message after 5 seconds
      const timer = setTimeout(() => {
        setTransactionStatus('');
      }, 5000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }

  }, [writeData, status]);

  
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

  let drawerContent;
  if (Array.isArray(messages) && messages.length > 0) {
    drawerContent = (
      <ul className="divide-y">
        {messages.map((message, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 ">From: {message.sender}</p>
              <p className="mt-1 truncate text-xs leading-5 ">Message: {message.message}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  } else if (isConnected) {
    drawerContent = <div>No messages found in your inbox.</div>;
  } else {
    drawerContent = <div>Please make sure you are connected to your Wallet.</div>;
  }

  useEffect(() => {
    setArgs([addressSend, message]);
  }, [addressSend, message]);
  
    return (
        <div>
             
       <div className="flex justify-center ">  
      <div className="w-full  max-w-md rounded-lg shadow-md p-6 pt-0 space-y-8 ">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">Messenger</h2>
          <p className="">Start a chat with other wallets via the Polygon Mumbai chain. Make sure your wallet is connected to send messages</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="wallet">Wallet Address</Label>
            <Input id="address" required value={addressSend}
              onChange={handleAddressChange} maxLength={42}
              pattern="^[a-zA-Z0-9]*$" className={addressError ? "input-error" : ""} placeholder="Enter recipient wallet address" />
            {addressError && <div className="error-message">{addressError}</div>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Input id="message" value={message}
              onChange={handleMessageChange}
              minLength={1}
              maxLength={150} placeholder="Enter your message" />
            <div className="flex mt-4 space-x-12 p-4 justify-center">
          <Button disabled={!addressSend || !message || !!addressError || !write}
            onClick={handleSubmit} className="w-2/5" >
            Send
          </Button>
         
          <Drawer >
          <DrawerTrigger asChild>
        <Button variant="secondary" className="w-2/5">Inbox</Button>
      </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Your Messages:</DrawerTitle>
                </DrawerHeader>
                <DrawerFooter>
                {drawerContent}
                <DrawerClose>
                    <Button variant="destructive">Close</Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>

      
        </div>
       
            <div className="flex justify-center space-x-4 p-4">
               
                <w3m-button />
                
            </div>
            
          </div>
        </div>
      
      </div>
      
    </div>
   
{isTransactionInProgress && (
        <div className={` mt-4 text-center text-sm font-medium `}>Waiting for transaction to go through...</div>
      )}
      {/* Display transaction status */}
      {transactionStatus && (
        <div className="mt-4 text-center text-sm font-medium text-green-600">{transactionStatus}</div>
      )}
    </div>
    );
}
