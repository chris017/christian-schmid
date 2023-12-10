
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Messenger from './pages/Messenger.tsx'
import NotFound from './pages/NotFound.tsx'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  polygonMumbai,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/messenger",
    element: <Messenger />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WagmiConfig config={config}>
    <RainbowKitProvider chains={chains}modalSize="compact" theme={lightTheme({
    accentColor:
    "black",
    accentColorForeground: "white",
    borderRadius: "small",
    fontStack: "system",
    overlayBlur: "small",
  })}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>
)
