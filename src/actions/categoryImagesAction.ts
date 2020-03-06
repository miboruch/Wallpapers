import axios from 'axios';
import slugify from 'slugify';
import { Dispatch } from 'redux';
import { AppActions } from '../types/actionTypes'; /* All possible actions */
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ERROR,
  FETCH_IMAGES_SUCCESS,
  FETCH_START,
  SET_CURRENT_QUERY,
  SET_TOTAL_IMAGES
} from '../types/categoryImagesActionTypes';
import { categoryQueries } from '../utils/imagesCategories';
import { API_URL } from '../utils/constants';

const fetchStart = (): AppActions => {
  return {
    type: FETCH_START
  };
};

export const setCurrentQuery = (query: string): AppActions => {
  return {
    type: SET_CURRENT_QUERY,
    payload: query
  };
};

const fetchCategoriesSuccess = (result: any[]): AppActions => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: result
  };
};

const fetchImagesSuccess = (result: any[]): AppActions => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: result
  };
};

const setTotalImages = (allImages: number): AppActions => {
  return {
    type: SET_TOTAL_IMAGES,
    payload: allImages
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
      const {
        data: { hits }
      } = await axios.get(`${API_URL}/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${id}`);

      resultObject = [...resultObject, { title, description, hits: hits[0] }];

      /* fix this, not the best way to do it */
      dispatch(fetchCategoriesSuccess(resultObject));
    });
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const fetchAllCategoryImages = (
  query: string,
  page: string[] | string | number | null | undefined,
  perPage: number | string = 21
) => async (dispatch: Dispatch<AppActions>) => {
  dispatch(fetchStart());
  const slugifiedQuery = slugify(query);

  try {
    const { data } = await axios.get(
      `${API_URL}/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${slugifiedQuery}&page=${page}&per_page=${perPage}`
    );

    /* change to 21 */

    dispatch(setTotalImages(data.totalHits));
    dispatch(fetchImagesSuccess(data.hits));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
