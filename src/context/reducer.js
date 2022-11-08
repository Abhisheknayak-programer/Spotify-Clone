export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null,
  top_artists: null,
  spotify: null,
};

const reducer = (state, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  }

  if (action.type === "SET_TOKEN") {
    return {
      ...state,
      token: action.token,
    };
  }

  if (action.type === "SET_PLAYLISTS") {
    return {
      ...state,
      playlists: action.playlists,
    };
  }

  if (action.type === "SET_DISCOVER_WEEKLY") {
    return {
      ...state,
      discover_weekly: action.discover_weekly,
    };
  }

  if (action.type === "SET_PLAYING") {
    return {
      ...state,
      playing: action.playing,
    };
  }

  if (action.type === "SET_ITEM") {
    return {
      ...state,
      item: action.item,
    };
  }

  if (action.type === "SET_TOP_ARTISTS") {
    return {
      ...state,
      top_artists: action.top_artists,
    };
  }

  if (action.type === "SET_SPOTIFY") {
    return {
      ...state,
      spotify: action.spotify,
    };
  }

  return initialState;
};

export default reducer;
