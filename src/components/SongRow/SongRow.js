import React from "react";
import "./SongRow.css";

const SongRow = (props) => {
  return (
    <div className="songRow">
      <img
        src={props.track.album.images[0].url}
        alt={props.track.name}
        className="song__album"
      />
      <div className="songRow__info">
        <h1>{props.track.name}</h1>
        <p>
          {props.track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {props.track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
