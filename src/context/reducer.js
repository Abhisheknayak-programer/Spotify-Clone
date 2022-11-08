export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null,
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

  return initialState;
};

export default reducer;
