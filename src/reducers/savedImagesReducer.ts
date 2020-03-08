import {
  ADD_IMAGE,
  FETCH_ERROR,
  FETCH_SAVED_SUCCESS,
  FETCH_START,
  FETCH_STOP,
  REMOVE_IMAGE,
  SavedImagesTypes
} from '../types/savedImagesTypes';

interface DefaultState {
  loading: boolean;
  savedImages: any[];
  error: string | null;
}

const savedImagesDefaultState: DefaultState = {
  loading: false,
  savedImages: [],
  error: null
};

export const savedImagesReducer = (state = savedImagesDefaultState, action: SavedImagesTypes) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: false
      };
    case FETCH_SAVED_SUCCESS:
      return {
        ...state,
        savedImages: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_STOP:
      return {
        ...state,
        loading: false
      };
    case ADD_IMAGE:
      return {
        ...state,
        savedImages: [...state.savedImages, action.payload]
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        savedImages: state.savedImages.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
};
