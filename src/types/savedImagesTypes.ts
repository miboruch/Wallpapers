export const FETCH_START = 'FETCH_START';
export const FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_STOP = 'FETCH_STOP';
export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export interface FetchStart {
  type: typeof FETCH_START;
}

export interface FetchSuccess {
  type: typeof FETCH_SAVED_SUCCESS;
  payload: any[];
}

export interface FetchError {
  type: typeof FETCH_ERROR;
  payload: string;
}

export interface FetchStop {
  type: typeof FETCH_STOP;
}

export interface AddImage {
  type: typeof ADD_IMAGE;
  payload: string | number;
}

export interface RemoveImage {
  type: typeof REMOVE_IMAGE;
  payload: string | number;
}

export type SavedImagesTypes =
  | FetchStart
  | FetchSuccess
  | FetchError
  | FetchStop
  | AddImage
  | RemoveImage;
