'use client'

import * as React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  polygonMumbai,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet,
      polygon,
      polygonMumbai,
    ],
    [
      alchemyProvider({
        apiKey: 'blrtXAtdt4wsZpfi3CgVhcRZ8J5uXMc4',
      }),
      publicProvider(),
    ],
    { stallTimeout: 5000 },
  );

  const { connectors } = getDefaultWallets({
    appName: 'portfolio',
    projectId: '2bad02e5b008465fe676ccdc8bfcf574',
    chains,
  });
const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
  });

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return <WagmiConfig config={config}><RainbowKitProvider chains={chains} modalSize="compact" theme={lightTheme({
    accentColor:
    "black",
    accentColorForeground: "white",
    borderRadius: "small",
    fontStack: "system",
    overlayBlur: "small",
  })}>{mounted && children}</RainbowKitProvider></WagmiConfig>
}