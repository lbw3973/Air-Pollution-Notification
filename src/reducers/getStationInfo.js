import { fetchData, getParameters } from "../apis/axios";

const GET_CITIES = "citys/GET_CITYS";
const GET_CITEIS_SUCCESS = "citys/GET_CITYS_SUCCESS";
const GET_CITIES_ERROR = "citys/GET_CITY_ERROR";

export const getStationInfo =
  (city = "서울") =>
  async (dispatch) => {
    dispatch({ type: GET_CITIES });
    try {
      const param = getParameters;
      param.sidoName = city;
      const res = await fetchData(param);
      dispatch({ type: GET_CITEIS_SUCCESS, payload: { cities: res } });
    } catch (e) {
      dispatch({ type: GET_CITIES_ERROR, error: e });
    }
  };

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const getStationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_CITEIS_SUCCESS:
      return {
        loading: false,
        data: action.payload.cities,
        error: null,
      };
    case GET_CITIES:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};
