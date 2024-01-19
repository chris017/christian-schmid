"use client";
import React from 'react';
import { useTheme } from "next-themes";
import {RainbowKitProvider, getDefaultWallets, lightTheme,
  darkTheme} from '@rainbow-me/rainbowkit';
import {mainnet} from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';
import {publicProvider} from 'wagmi/providers/public';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'


const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet,
    ],
    [
      alchemyProvider({
        apiKey: process.env.ALCHEMY_API_KEY as string,
      }),
      publicProvider(),
    ],
    { stallTimeout: 5000 },
  );



const { connectors } = getDefaultWallets({
    appName: 'portfolio',
    projectId: "1c904382dd9c1e7e893bb42857b04d2c",
    chains,
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

interface Providers {
    children: React.ReactNode;
    // Weitere erwartete Props hier
  }

const Providers: React.FC<Providers> = ({ children }) => {
  const { theme } = useTheme();
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider theme={theme === 'dark' ? darkTheme(
              {
                accentColor: "#FAFAFA",
                accentColorForeground: "#18181B",
              }
            ) : lightTheme(
              {
                accentColor: "#18181B",
                accentColorForeground: "#FAFAFA",
              }
            )} chains={chains} modalSize="compact">
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
            
 
    );
}

export default Providers;