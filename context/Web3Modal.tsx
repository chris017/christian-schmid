'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'
import ClientOnly from './ClientOnly'


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '2bad02e5b008465fe676ccdc8bfcf574'

// 2. Create wagmiConfig

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId })

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  enableAnalytics: true, 
  themeMode: 'dark',
})

export function Web3Modal({ children }) {
  return <WagmiConfig config={wagmiConfig}><ClientOnly>{children}</ClientOnly></WagmiConfig>
}