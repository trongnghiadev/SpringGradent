import apipublic from "../../../config/apipublic";
import {
  GET_ALL_CATEGORY_FAILURE,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
} from "./ActionType";

export const findCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_REQUEST });

    // Thực hiện cuộc gọi HTTP để lấy danh mục sản phẩm từ API của bạn
    const { data } = await apipublic.get(`/customer/categories`);

    //console.log("get categories - ", data);
    dispatch({
      type: GET_ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
