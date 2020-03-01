import { combineReducers } from 'redux';
import { categoryImagesReducer } from './categoryImagesReducer';

export const rootReducer = combineReducers({
  categoryImagesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
