import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { repositoriesReducer } from './repositories';
import { searchReducers } from './search';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const store = configureStore({
	reducer: { repositories: repositoriesReducer, search: searchReducers },
});
