"use client"
import { useWeb3ModalTheme } from "@web3modal/wagmi/react";
import { useTheme } from "next-themes"; // Import the useTheme hook
import { useEffect, useState } from "react";

import { useSignMessage } from 'wagmi'


export default function Dashboardside() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setIsDarkMode(theme === "dark"); // Update the dark mode based on the theme
      }, [theme]);


    const { themeMode, themeVariables, setThemeMode, setThemeVariables } = useWeb3ModalTheme();

   
    setThemeMode(isDarkMode ? "dark" : "light",);
    return (
        <div>
             <w3m-button />
        </div>
    );
}
