export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
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

  return initialState;
};

export default reducer;
