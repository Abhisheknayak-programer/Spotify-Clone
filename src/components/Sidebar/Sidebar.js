import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo.jpg";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
// import { useStateValue } from "../../context/StateProvider";

const SideBar = () => {
  // const [spotifyStateValue, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="sidebar__logo" />

      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />

      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {/* {spotifyStateValue?.playlists?.items.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))} */}

      <SidebarOptions title="Hip Hop" />
      <SidebarOptions title="Rock" />
      <SidebarOptions title="Coding Time" />
    </div>
  );
};

export default SideBar;
