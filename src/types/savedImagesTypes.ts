export const FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS';
export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export interface SavedImageItem {
  id: string;
  webFormatURL: string;
}

export interface FetchSuccess {
  type: typeof FETCH_SAVED_SUCCESS;
  payload: any[];
}

export interface AddImage {
  type: typeof ADD_IMAGE;
  payload: SavedImageItem;
}

export interface RemoveImage {
  type: typeof REMOVE_IMAGE;
  payload: string;
}

export type SavedImagesTypes = FetchSuccess | AddImage | RemoveImage;
