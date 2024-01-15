"use client";
import React from 'react';
import {RainbowKitProvider, getDefaultWallets} from '@rainbow-me/rainbowkit';
import {mainnet} from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';
import {publicProvider} from 'wagmi/providers/public';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const {chains, publicClient, webSocketPublicClient} = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey:  (ALCHEMY_API_KEY || "test")})],
);
// console.log(process.env.ALCHEMY_API_KEY)


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
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} modalSize="compact">
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
            
 
    );
}

export default Providers;