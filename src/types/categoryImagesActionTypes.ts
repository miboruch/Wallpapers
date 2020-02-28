export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export interface FetchStart {
  type: typeof FETCH_START;
}

export interface FetchSuccess {
  type: typeof FETCH_SUCCESS;
  payload: any[];
}

export interface FetchError {
  type: typeof FETCH_ERROR;
  error: string;
}

export type CategoryImagesActionTypes = FetchStart | FetchSuccess | FetchError;
