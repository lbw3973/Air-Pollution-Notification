const SELECT_STATION = "stations/GET_STATION";

export const getStationData = (station) => {
  return { type: SELECT_STATION, payload: station };
};

const initialState = "";

export const getStationDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_STATION:
      return action.payload;
    default:
      return state;
  }
};
