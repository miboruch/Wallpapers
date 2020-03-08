import { combineReducers } from 'redux';
import { categoryImagesReducer } from './categoryImagesReducer';
import { savedImagesReducer } from './savedImagesReducer';

export const rootReducer = combineReducers({
  categoryImagesReducer,
  savedImagesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
