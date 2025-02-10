import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const store = configureStore({ reducer: {} });
