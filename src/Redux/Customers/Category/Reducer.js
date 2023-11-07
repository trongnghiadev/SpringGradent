import {
  GET_ALL_CATEGORY_FAILURE,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
} from "./ActionType";

const initialState = {
  categories: [],

  loading: false,
  error: null,
};

const customerCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_REQUEST:
      return { ...state, loading: true, error: null, categories: [] };
    case GET_ALL_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload, loading: false };
    case GET_ALL_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customerCategoryReducer;
