import { createSlice } from '@reduxjs/toolkit';

import { searchState } from './types';
import { fetchRepositoriesByUsername } from '../repositories/thunks';
import { AppError } from '../../../types/app-error';

const initialState: searchState = {
	value: '',
	error: null,
	isError: false,
};

const searchSlice = createSlice({
	name: 'search',
	initialState: initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload;
		},
		setError: (state, action) => {
			state.isError = true;
			state.error = action.payload;
		},
		clearError: (state) => {
			state.isError = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRepositoriesByUsername.fulfilled, (state, action) => {
			state.value = action.meta.arg.searchInput;
			state.error = null;
			state.isError = false;
		});
		builder.addCase(fetchRepositoriesByUsername.rejected, (state, action) => {
			const error = action.payload as AppError;

			if (error.status === 404) {
				state.error = 'Пользователь не найден';
				state.isError = true;
			}
		});
	},
});

export const { actions: searchAction, reducer: searchReducers } = searchSlice;
