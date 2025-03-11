import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
// import ConnectWallet from "./ConnectWallet";
import { WalletModal } from "./WalletModal";
// import { Modal } from "./Modal";
// import PhantomWallet from "./PhantomWallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<WalletModal isOpen = {true} onClose={() => {}} />} />
        {/* <Route path="/wallet" element={<PhantomWallet children={null} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
