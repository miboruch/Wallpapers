import {
  CategoryImagesActionTypes,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS
} from '../types/categoryImagesActions';

interface DefaultState {
  loading: boolean;
  categoryImages: [];
  error: string | null;
}

const categoryImagesDefaultState: DefaultState = {
  loading: false,
  categoryImages: [],
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
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryImages: action.payload
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
