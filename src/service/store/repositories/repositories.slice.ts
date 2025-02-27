import { createSlice } from '@reduxjs/toolkit';

import { Repository } from './types';
import { fetchRepositoriesByUsername } from './thunks';
import { PER_PAGE_COUNT } from '../../../utils/constants';

type InitialStateType = {
	page: number;
	list: Repository[];
	isLoading: boolean;
	nextRequestAllowed: boolean;
};

const initialState: InitialStateType = {
	page: 1,
	list: [],
	isLoading: false,
	nextRequestAllowed: true,
};

const repositoriesSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		endLoading: (state) => {
			state.isLoading = false;
		},
		resetRepositories: (state) => {
			state.page = 1;
			state.list = [];
			state.isLoading = false;
			state.nextRequestAllowed = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepositoriesByUsername.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchRepositoriesByUsername.fulfilled, (state, action) => {
				state.isLoading = false;

				if (action.meta.arg.page === 1) {
					state.list = action.payload;
					state.page = 1;
				} else {
					state.list = state.list.concat(action.payload);
				}

				if (action.payload.length < PER_PAGE_COUNT) {
					state.nextRequestAllowed = false;
				} else {
					state.page += 1;
					state.nextRequestAllowed = true;
				}
			})
			.addCase(fetchRepositoriesByUsername.rejected, (state) => {
				state.isLoading = false;
				state.nextRequestAllowed = false;
			});
	},
});

export const { actions: repositoriesActions, reducer: repositoriesReducer } =
	repositoriesSlice;
