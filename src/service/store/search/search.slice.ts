import { createSlice } from '@reduxjs/toolkit';

import { fetchRepositoriesByUsername } from '../repositories/thunks';

type SearchValue = string;
type SearchError = string;

export type SearchState = {
	value: SearchValue;
	error: SearchError | null;
};

const initialState: SearchState = {
	value: '',
	error: null,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		resetError: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRepositoriesByUsername.fulfilled, (state, action) => {
			state.value = action.meta.arg.searchInput;
		});
	},
});

export const { actions: searchActions, reducer: searchReducer } = searchSlice;
