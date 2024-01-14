import { configureChains } from '@wagmi/core'
import { publicProvider } from '@wagmi/core/providers/public'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { mainnet } from 'viem/chains'
import { createConfig } from 'wagmi'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)
alchemyProvider({ apiKey: "XuvfoDeUnbxJ-F5EbOP7ZLxaYBHOanlU" })
export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})