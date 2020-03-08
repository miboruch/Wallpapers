import {
  ADD_IMAGE,
  FETCH_ERROR,
  FETCH_SAVED_SUCCESS,
  FETCH_START,
  FETCH_STOP,
  REMOVE_IMAGE,
  SavedImagesTypes
} from '../types/savedImagesTypes';
import { Dispatch } from 'redux';
import { AppActions } from '../types/actionTypes';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const fetchStart = (): SavedImagesTypes => {
  return {
    type: FETCH_START
  };
};

export const fetchSavedSuccess = (result: any[]): SavedImagesTypes => {
  return {
    type: FETCH_SAVED_SUCCESS,
    payload: result
  };
};

const fetchError = (error: string): SavedImagesTypes => {
  return {
    type: FETCH_ERROR,
    payload: error
  };
};

const fetchStop = (): SavedImagesTypes => {
  return {
    type: FETCH_STOP
  };
};

export const loadLikedImages = (): string[] | any[] => {
  const storedLocal: string | null = localStorage.getItem('liked');
  if (storedLocal) {
    return JSON.parse(storedLocal);
  }
  return [];
};

export const saveImage = (id: string | number): SavedImagesTypes => {
  let liked: any[];
  const storedLocal: string | null = localStorage.getItem('liked');

  if (storedLocal) {
    liked = JSON.parse(storedLocal);
    localStorage.removeItem('liked');
  } else {
    liked = [];
  }

  liked.push(id);
  localStorage.setItem('liked', JSON.stringify(liked));

  return {
    type: ADD_IMAGE,
    payload: id
  };
};

export const removeSavedImage = (id: string | number): SavedImagesTypes => {
  const storedLikedImages: string | null = localStorage.getItem('liked');
  if (storedLikedImages) {
    const updatedCart: string[] = JSON.parse(storedLikedImages).filter(
      (item: string) => item !== id
    );
    localStorage.setItem('liked', JSON.stringify(updatedCart));
  }

  return {
    type: REMOVE_IMAGE,
    payload: id
  };
};

/* --- */

// export const fetchSavedImages = () => async (dispatch: Dispatch<AppActions>) => {
//   const result: string[] = loadLikedImages();
//   console.log(result);
//   dispatch(fetchStart());
//   if (result) {
//     let fetchedImages: any[] = [];
//     result.map(async (item: string) => {
//       console.log(item);
//       try {
//         const {
//           data: { hits }
//         } = await axios.get(`${API_URL}/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${item}`);
//
//         fetchedImages.push(hits[0]);
//         console.log(fetchedImages);
//         dispatch(fetchSavedSuccess(fetchedImages));
//       } catch (error) {
//         dispatch(fetchError(error));
//       }
//     });
//   }
//   dispatch(fetchStop());
// };
