import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Nftmarketplace from "./pages/Nftmarketplace";
import Jobs from "./pages/Jobs";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import "./App.css";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";

const App = () => {
  const { isAuthenticated, Moralis } = useMoralis();

  return (
    <>
    {isAuthenticated ? (
      <div className="page">
        <div className="sideBar">
          <Sidebar />
          <div
              className="logout"
              onClick={() => {
                Moralis.User.logOut().then(() => {
                  window.location.reload();
                });
              }}
            >
              Logout
            </div>
        </div>
        <div className="mainWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/nftmarketplace" element={<Nftmarketplace />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </div>
        <div className="rightBar">
          <Rightbar />
        </div>
      </div>
      ) : (
        <div className="loginPage">
          <img src="/white.png" width={200}/>
          <p className="login-desc">Join millions of Blockchain enthusiast all over the globe to share what's happening in the world of Blockchain, Connect and learn more about the crypto space and thus earn.</p>
          <div className="xy">
            <div className="xyz">
              <ConnectButton/>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default App;
