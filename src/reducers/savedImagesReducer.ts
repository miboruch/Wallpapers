import {
  ADD_IMAGE,
  FETCH_SAVED_SUCCESS,
  REMOVE_IMAGE,
  SavedImageItem,
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
    case FETCH_SAVED_SUCCESS:
      return {
        ...state,
        savedImages: action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        savedImages: [...state.savedImages, action.payload]
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        savedImages: state.savedImages.filter((item: SavedImageItem) => item.id !== action.payload)
      };
    default:
      return state;
  }
};
