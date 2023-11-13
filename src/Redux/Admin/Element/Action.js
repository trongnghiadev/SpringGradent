import api, { API_BASE_URL } from "../../../config/api";
import {
  CREATE_ELEMENT_FAILURE,
  CREATE_ELEMENT_REQUEST,
  CREATE_ELEMENT_SUCCESS,
  GET_ELEMENTS_FAILURE,
  GET_ELEMENTS_REQUEST,
  GET_ELEMENTS_SUCCESS,
} from "./ActionType";
export const createElement = (element) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ELEMENT_REQUEST });

    const { data } = await api.post(
      `${API_BASE_URL}/api/admin/elements/`,
      element.data
    );

    dispatch({
      type: CREATE_ELEMENT_SUCCESS,
      payload: data,
    });

    //console.log("created product ", data);
  } catch (error) {
    dispatch({
      type: CREATE_ELEMENT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getEmlement = (reqData) => async (dispatch) => {
  const { pageNumber, pageSize } = reqData;
  try {
    dispatch({ type: GET_ELEMENTS_REQUEST });

    const { data } = await api.get(
      `/api/admin/elements/all?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    //console.log("getEmlement - ", data);
    dispatch({
      type: GET_ELEMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ELEMENTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
