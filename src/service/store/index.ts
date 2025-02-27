import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { repositoriesReducer } from './repositories/repositories.slice';
import { searchReducer } from './search/search.slice';
import { appNotificationReducer } from './app-notification/app-notification.slice';
import { errorMiddleware } from './middleware/error-middleware';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const store = configureStore({
	reducer: {
		repositories: repositoriesReducer,
		search: searchReducer,
		appNotification: appNotificationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([errorMiddleware]),
});
