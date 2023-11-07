// import React from "react";
// import { useAccount } from "wagmi";
// import Icons from "../components/Icons";
// import { Network, Alchemy } from "alchemy-sdk";
// import NftGallary from "../components/nftGallery.jsx";
// import { Center } from "@chakra-ui/react";
// import Menubar from "../components/Menubar";
// type WalletAddressProps = {
//     walletAddress: `0x${string}` | undefined;
//     collectionAddress: any;
//     chain: string;
//     pageSize: any;
// };

// const Stats = (): JSX.Element => {
//     const alchemy = new Alchemy();
//     const account = useAccount({
//         onConnect({ address, connector, isReconnected }) {
//             console.log("Connected", { address, connector, isReconnected });
//         },
//     });
//     return (
//         <>
//         <Menubar />
//         <div>

//             {account.address && (
//                 <NftGallary
//                     walletAddress={account.address}
//                     collectionAddress={null}
//                     chain={"ETH_MAINNET"}
//                     pageSize={null}
//                 ></NftGallary>
//             )}
//             {!account.address && (
//                 <div>
//                 <Center >No NFTs found for the connected address</Center>
//                 <Center>Have a look at some Apes in the meantime</Center>
//                 <NftGallary
//                     collectionAddress={"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"}
//                     walletAddress={null}
//                     chain={"ETH_MAINNET"}
//                     pageSize={null}
//                 ></NftGallary>
//                 </div>
//             )}
//         </div>
//         </>
//     );
// };

// export default Stats;
