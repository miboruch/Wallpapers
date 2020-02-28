import { combineReducers } from 'redux';
import { categoryImagesReducer } from './categoryImagesReducer';
import { allCategoryImagesReducer } from './allCategoryImagesReducer';

export const rootReducer = combineReducers({
  categoryImagesReducer,
  allCategoryImagesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
