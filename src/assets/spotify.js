// SPOTIFY DOCS : https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https:///accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
// const clientId = "1c17d1a6f75c4c9cbcee28c914698fb1";  //// EXTRA CLIENT ID
const clientId = "b8579d2feca547e88abbc98784899245";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((acc, el) => {
      let parts = el.split("=");
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
