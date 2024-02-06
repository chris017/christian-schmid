'use client'
import React from 'react'; // Import hinzufügen
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { env } from 'process'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygonMumbai } from 'viem/chains'
import ClientOnly from './ClientOnly'

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error('PROJECT_ID environment variable is not set');
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const chains = [polygonMumbai]
const wagmiConfig = defaultWagmiConfig({ chains, projectId })


interface Web3ModalProps {
  children: React.ReactNode; // Expliziter Typ für children
}
// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  enableAnalytics: true, 
  themeMode: 'dark',
    //...
    themeVariables: {
      '--w3m-accent': '#00BB7F',
    }
})

export function Web3Modal({ children }: Web3ModalProps) {
  return <WagmiConfig config={wagmiConfig}><ClientOnly>{children}</ClientOnly></WagmiConfig>
}