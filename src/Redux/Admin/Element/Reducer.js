import {
  CREATE_ELEMENT_FAILURE,
  CREATE_ELEMENT_REQUEST,
  CREATE_ELEMENT_SUCCESS,
  DELETE_ELEMENT_FAILURE,
  DELETE_ELEMENT_REQUEST,
  DELETE_ELEMENT_SUCCESS,
  GET_ELEMENTS_FAILURE,
  GET_ELEMENTS_REQUEST,
  GET_ELEMENTS_SUCCESS,
  UPDATE_ELEMENT_FAILURE,
  UPDATE_ELEMENT_REQUEST,
  UPDATE_ELEMENT_SUCCESS,
} from "./ActionType";

const initialState = {
  elements: [],
  loading: false,
  error: null,
  deleteElement: null,
};

const adminElementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ELEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ELEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        elements: action.payload,
      };
    case GET_ELEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_ELEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ELEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        elements: [...state.elements, action.payload],
      };
    case CREATE_ELEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ELEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_ELEMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        elements: state.elements.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case UPDATE_ELEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ELEMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_ELEMENT_SUCCESS:
      //console.log("delete ", state.elements);
      return {
        ...state,
        loading: false,
        deleteElement: action.payload,
      };
    case DELETE_ELEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminElementReducer;
