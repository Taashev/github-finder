import { createSlice } from '@reduxjs/toolkit';

import { Repository } from './types';

type InitialStateType = {
	list: Repository[];
};

const initialState: InitialStateType = {
	list: [],
};

const repositoriesSlice = createSlice({
	name: 'repositories',
	initialState: initialState,
	reducers: {},
});

export const { actions: repositoriesActions, reducer: repositoriesReducer } =
	repositoriesSlice;
