import React, { useEffect, useState } from "react";
import "./App.css";
import { getTokenFromUrl } from "./assets/spotify";
import Login from "./container/Login/Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./container/Player/Player";
import { useStateValue } from "./context/StateProvider";

const spotify = new SpotifyWebApi(); // Init a new spotify object to get a lot of functionality

const App = () => {
  const [token, setToken] = useState(null);
  const [spotifyStateValue, spotifyDispatchFunc] = useStateValue();

  useEffect(() => {
    const data = getTokenFromUrl(); // Calling a function and storing the returned values
    window.location.hash = ""; // Clearing the hash value of the url
    const tokenData = data.access_token;

    if (tokenData) {
      setToken(tokenData);

      spotify.setAccessToken(tokenData); // Setting the access token of that spotify object initialised at the top

      // getMe is the Inbuilt function which returns the promise with the argument of user details.
      spotify.getMe().then((user) => {
        // console.log(user);
        spotifyDispatchFunc({ type: "SET_USER", user: user });
        spotifyDispatchFunc({ type: "SET_TOKEN", token: tokenData });
      });

      spotify.getUserPlaylists().then((playlists) => {
        spotifyDispatchFunc({ type: "SET_PLAYLISTS", playlists: playlists });
      });

      spotify.getPlaylist("5nGgTcWSraMFxgl6bbnYRr").then((response) => {
        spotifyDispatchFunc({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        spotifyDispatchFunc({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      spotifyDispatchFunc({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, []);

  console.log(spotifyStateValue);
  return (
    <div>
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
};

export default App;
