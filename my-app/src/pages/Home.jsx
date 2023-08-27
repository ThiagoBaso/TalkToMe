import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
    return(
        <div className="Home">
            <div className="HomeContainer">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home;