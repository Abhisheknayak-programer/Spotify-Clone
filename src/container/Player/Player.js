import React from "react";
import "./Player.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

const Player = (props) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={props.spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
