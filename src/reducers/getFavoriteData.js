const ADD_FAVORITE = "favorite/ADD_FAVORITE";
const REMOVE_FAVORITE = "favorite/REMOVE_FAVORITE";

export const addFavoriteData = (item) => {
  return { type: ADD_FAVORITE, payload: item };
};

export const removeFavoriteData = (item) => {
  return { type: REMOVE_FAVORITE, payload: item };
};

const initialState = [];

export const getFavoriteDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter(
        (item) => item.stationName !== action.payload.stationName
      );
    default:
      return state;
  }
};
