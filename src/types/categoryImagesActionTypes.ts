export const FETCH_START = 'FETCH_START';
export const SET_CURRENT_QUERY = 'SET_CURRENT_QUERY';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export interface FetchStart {
  type: typeof FETCH_START;
}

export interface SetCurrentQuery {
  type: typeof SET_CURRENT_QUERY;
  payload: string;
}

export interface FetchCategoriesSuccess {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: any[];
}

export interface FetchImagesSuccess {
  type: typeof FETCH_IMAGES_SUCCESS;
  payload: any[];
}

export interface FetchError {
  type: typeof FETCH_ERROR;
  error: string;
}

export type CategoryImagesActionTypes =
  | FetchStart
  | SetCurrentQuery
  | FetchCategoriesSuccess
  | FetchImagesSuccess
  | FetchError;
