import { ArrowDownIcon } from "lucide-react";
// import PhantomWallet from "./PhantomWallet";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet";

function Dashboard() {
  const [isModal, setModal] = useState(false);
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#020B1C] via-[#051236] to-[#020B1C] text-white items-center justify-center"
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignContent: "space-around",
      }}
    >
      <span
        className="text-sm font-bold"
        style={{
          padding: "15px",
          backgroundColor: "black",
          borderRadius: "100vh",
          alignItems: "center",
          justifyContent: "center",
          marginTop : "20px",
          boxShadow: "0px 3px 20px #686b99",
        }}
      >
        50 SOL Giveaway🎉! Connect Wallet to Enter!
      </span>
      {/* Header */}
      {/* <header className="p-6 flex justify-between items-center" style={{position : "absolute", top : "10px"}}> */}
        <div className="flex items-center gap-2">
          <img src="/logo.PNG" alt="Logo" className="w-20 h-14 logo-display"/>
        </div>
        <button className="bg-[#5AA1E8] hover:bg-[#4891d8] text-white px-6 py-2 rounded-full transition-all connect-button-display">
          <div
            className="flex items-center gap-2 font-bold "
            style={{ color: "black" }}
            onClick={() => setModal(true)}
          >
            Connect Wallet
          </div>
        </button>
      {/* </header> */}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
              Solana Giveaway
            </span>
            {" & explore the world of cryptocurrency."}
          </h1>
          <p className="text-gray-400 text-lg">
            Our reliable platform empowers your journey with essential insights
            and tools.
          </p>
        </div>

        {/* Exchange Card */}
        <div
          className="max-w-md mx-auto bg-[#0b102a] backdrop-blur-sm rounded-2xl p-6"
          style={{
            backgroundColor: "#0b102a",
            boxShadow: "0px 3px 20px #333334",
          }}
        >
          {/* Sell Section */}
          <div className="currency-part mb-6 bg-[#0b102a]">
            <label className="part-title">Sell</label>
            {/* <div className=" relative rounded-xl p-4 flex justify-between items-center"> */}
            <input
              type="number"
              className="input-value bg-transparent text-2xl font-semibold focus:outline-none"
            />
            <button className="combobox absolue bg-gray-700 px-3 py-1 rounded-lg flex items-center gap-2">
              BTC
              <ArrowDownIcon size={16} />
            </button>
            <div className="part-description text-sm text-gray-500">
              82.7654 BTC available
            </div>
            <div className="capacity">MAX</div>
            <hr
              style={{
                border: "1px solid #aaa",
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
              }}
            />
          </div>
          {/* Buy Section */}
          <div className="currency-part mb-6">
            <label className="part-title">Buy</label>
            <input
              type="number"
              className="input-value bg-transparent text-2xl font-semibold focus:outline-none"
            />
            <button className="combobox absolue bg-gray-700 px-3 py-1 rounded-lg flex items-center gap-2">
              ETH
              <ArrowDownIcon size={16} />
            </button>
            <div className="part-description text-sm text-gray-500">
              Estimated Fee: $3.78
            </div>
            <div className="capacity">Fast</div>
            <hr
              style={{
                border: "1px solid #aaa",
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
              }}
            />
          </div>

          <button
            className="w-full bg-[#5AA1E8] hover:bg-[#4891d8] text-white py-3 rounded-xl font-semibold transition-all"
            style={{ color: "black" }}
            onClick={() => setModal(true)}
          >
            Swap
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.PNG" alt="Logo" className="w-10 h-6" />
          <span className="text-sm text-gray-400">
            Discover the world of cryptocurrency with <br /> insights and tools
            tailored for your success.
          </span>
        </div>
        <div className="float-right p-2 flex space-x-6">
          <i
            className="fab fa-twitter text-2xl hover:text-blue-700"
            style={{ marginLeft: "20px" }}
          ></i>
          <i
            className="fab fa-facebook text-2xl hover:text-blue-700 mx-3"
            style={{ marginLeft: "20px" }}
          ></i>
          <i
            className="fab fa-instagram text-2xl hover:text-blue-700 mx-3"
            style={{ marginLeft: "20px" }}
          ></i>
          <i
            className="fab fa-discord text-2xl hover:text-blue-700"
            style={{ marginLeft: "20px" }}
          ></i>
        </div>
      </footer>
      <ConnectWallet visible={isModal} setVisible={setModal} />
    </div>
  );
}

export default Dashboard;
