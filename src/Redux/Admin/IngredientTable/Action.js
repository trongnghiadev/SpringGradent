import axios from "axios";
import api, { API_BASE_URL } from "../../../config/api";
import {
  ADD_ITEM_TO_INGREDIENTTABLE_FAILURE,
  ADD_ITEM_TO_INGREDIENTTABLE_REQUEST,
  ADD_ITEM_TO_INGREDIENTTABLE_SUCCESS,
  GET_INGREDIENTTABLE_FAILURE,
  GET_INGREDIENTTABLE_REQUEST,
  GET_INGREDIENTTABLE_SUCCESS,
} from "./ActionType";

export const getIngredienttable = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: GET_INGREDIENTTABLE_REQUEST });

    const { data } = await api.get(
      `/api/admin/IngredientTable/${reqData.productId}`
    );

    dispatch({
      type: GET_INGREDIENTTABLE_SUCCESS,
      payload: data,
    });

    //console.log("Ingredienttable by  id product: ", data);
  } catch (error) {
    dispatch({
      type: GET_INGREDIENTTABLE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addItemIngredienttable =
  (productid, reqData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_ITEM_TO_INGREDIENTTABLE_REQUEST });

      const { data } = await api.put(
        `/api/admin/IngredientTable/${productid}/addItem`,
        reqData
      );

      dispatch({
        type: ADD_ITEM_TO_INGREDIENTTABLE_SUCCESS,
        payload: data,
      });

      //console.log("Thành Công ", data);
    } catch (error) {
      dispatch({
        type: ADD_ITEM_TO_INGREDIENTTABLE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
