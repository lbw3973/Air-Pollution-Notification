import { fetchData, getParameters } from "../apis/axios";

const GET_DATAS = "datas/GET_DATAS";
const GET_DATAS_SUCCESS = "datas/GET_DATAS_SUCCESS";
const GET_DATAs_ERROR = "datas/GET_DATAS_ERROR";

export const getPollutionData =
  (city = "서울") =>
  async (dispatch) => {
    dispatch({ type: GET_DATAS });
    try {
      const param = getParameters;
      param.sidoName = city;
      const res = await fetchData(param);
      dispatch({ type: GET_DATAS_SUCCESS, payload: { datas: res } });
    } catch (e) {
      dispatch({ type: GET_DATAs_ERROR, error: e });
    }
  };

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const getPollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_DATAS_SUCCESS:
      return {
        loading: false,
        data: action.payload.datas,
        error: null,
      };
    case GET_DATAS:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};
