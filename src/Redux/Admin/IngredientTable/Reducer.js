/* eslint-disable default-case */
import {
  ADD_ITEM_TO_INGREDIENTTABLE_FAILURE,
  ADD_ITEM_TO_INGREDIENTTABLE_REQUEST,
  ADD_ITEM_TO_INGREDIENTTABLE_SUCCESS,
  GET_INGREDIENTTABLE_FAILURE,
  GET_INGREDIENTTABLE_REQUEST,
  GET_INGREDIENTTABLE_SUCCESS,
} from "./ActionType";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const ingredientTableReducer = (state = initialState, action) => {
  //console.log(action.type);
  switch (action.type) {
    case GET_INGREDIENTTABLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_INGREDIENTTABLE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_INGREDIENTTABLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_ITEM_TO_INGREDIENTTABLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_ITEM_TO_INGREDIENTTABLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_ITEM_TO_INGREDIENTTABLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ingredientTableReducer;
