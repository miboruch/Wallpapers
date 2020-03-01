import {
  CategoryImagesActionTypes,
  FETCH_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_IMAGES_SUCCESS,
  FETCH_ERROR
} from '../types/categoryImagesActionTypes';

interface DefaultState {
  loading: boolean;
  categoryImages: any[];
  allCategoryImages: any[];
  error: string | null;
}

const categoryImagesDefaultState: DefaultState = {
  loading: false,
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
