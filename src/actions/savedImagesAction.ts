import {
  ADD_IMAGE,
  FETCH_SAVED_SUCCESS,
  REMOVE_IMAGE,
  SavedImagesTypes
} from '../types/savedImagesTypes';
import { SavedImageItem } from '../types/savedImagesTypes';

export const fetchSavedSuccess = (result: any[]): SavedImagesTypes => {
  return {
    type: FETCH_SAVED_SUCCESS,
    payload: result
  };
};

export const loadLikedImages = (): any[] => {
  const storedLocal: string | null = localStorage.getItem('liked');
  if (storedLocal) {
    return JSON.parse(storedLocal);
  }
  return [];
};

export const saveImage = (id: string, webFormatURL: string): SavedImagesTypes => {
  let liked: any[];
  const storedLocal: string | null = localStorage.getItem('liked');

  if (storedLocal) {
    liked = JSON.parse(storedLocal);
    localStorage.removeItem('liked');
  } else {
    liked = [];
  }

  liked.push({ id, webFormatURL });
  localStorage.setItem('liked', JSON.stringify(liked));

  return {
    type: ADD_IMAGE,
    payload: { id, webFormatURL }
  };
};

export const removeSavedImage = (id: string): SavedImagesTypes => {
  const storedLikedImages: string | null = localStorage.getItem('liked');
  if (storedLikedImages) {
    const updatedCart: string[] = JSON.parse(storedLikedImages).filter(
      (item: SavedImageItem) => item.id !== id
    );
    localStorage.setItem('liked', JSON.stringify(updatedCart));
  }

  return {
    type: REMOVE_IMAGE,
    payload: id
  };
};
