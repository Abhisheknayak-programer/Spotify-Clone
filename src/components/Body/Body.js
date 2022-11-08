import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useStateValue } from "../../context/StateProvider";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "../SongRow/SongRow";

const Body = (props) => {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    props.spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        props.spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    props.spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        props.spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img
          src={discover_weekly?.images[0]?.url}
          alt={discover_weekly?.name}
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__suffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" className="" />
          <MoreHorizIcon className="" />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
