import React from 'react';
import { useAccount } from 'wagmi'
import Icons from '../components/Icons'; 
import { Network, Alchemy } from "alchemy-sdk";
import NftGallary from "../components/nftGallery.jsx"


type WalletAddressProps = {
    walletAddress: `0x${string}` | undefined;
    collectionAddress: any;
    chain: string;
    pageSize: any;
}

const Stats = (): JSX.Element => {
        const alchemy = new Alchemy();
        const account = useAccount({
                onConnect({ address, connector, isReconnected }) {
                    console.log('Connected', { address, connector, isReconnected })
                },
            })
        
        return (
                <div>
                        <Icons />
                        <NftGallary walletAddress={account.address} collectionAddress={null} chain={"ETH_MAINNET"} pageSize={null}></NftGallary>
                </div>
        );
};

export default Stats;
