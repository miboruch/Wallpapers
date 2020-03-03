import {
  CategoryImagesActionTypes,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ERROR,
  FETCH_IMAGES_SUCCESS,
  FETCH_START,
  SET_CURRENT_QUERY
} from '../types/categoryImagesActionTypes';

interface DefaultState {
  loading: boolean;
  query: string | null;
  categoryImages: any[];
  allCategoryImages: any[];
  error: string | null;
}

const categoryImagesDefaultState: DefaultState = {
  loading: true,
  query: null,
  categoryImages: [],
  allCategoryImages: [],
  error: null
};

export const categoryImagesReducer = (
  state = categoryImagesDefaultState,
  action: CategoryImagesActionTypes
) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryImages: action.payload
      };
    case FETCH_IMAGES_SUCCESS:
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
