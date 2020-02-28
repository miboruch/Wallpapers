import {
  AllCategoryImagesActionTypes,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR
} from '../types/allCategoryImagesActionTypes';

interface DefaultState {
  loading: boolean;
  allCategoryImages: [];
  error: string | null;
}

const categoryImagesDefaultState: DefaultState = {
  loading: false,
  allCategoryImages: [],
  error: null
};

export const allCategoryImagesReducer = (
  state = categoryImagesDefaultState,
  action: AllCategoryImagesActionTypes
) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        allCategoryImages: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
