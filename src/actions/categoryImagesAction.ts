import axios from 'axios';
import { Dispatch } from 'redux';
import { AppActions } from '../types/actionTypes';
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from '../types/categoryImagesActionTypes';
import { categoryQueries } from '../utils/imagesCategories';
import { API_URL } from '../utils/constants';

const fetchStart = (): AppActions => {
  return {
    type: FETCH_START
  };
};

const fetchSuccess = (result: any[]): AppActions => {
  return {
    type: FETCH_SUCCESS,
    payload: result
  };
};

const fetchError = (error: string): AppActions => {
  return {
    type: FETCH_ERROR,
    error
  };
};

/* On the landing page -> single image from every single category */
export const fetchCategoryImages = () => (dispatch: Dispatch<AppActions>) => {
  dispatch(fetchStart());

  try {
    let resultObject: any[] = [];
    categoryQueries.map(async ({ title, description, id }) => {
      const { hits } = await axios.get(
        `${API_URL}/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${id}`
      );

      resultObject = [...resultObject, { query: title, description, hits }];
    });

    dispatch(fetchSuccess(resultObject));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
