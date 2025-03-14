import { createAsyncThunk } from '@reduxjs/toolkit';

import { Repository } from './types';

import { RootState } from '..';
import { gitHubRepositoriesApi } from '../../api/github-api/github-repositories-api';
import { parseRepositoriesResponse } from '../../../utils/normalize-repositories-response';

export const fetchRepositoriesByUsername = createAsyncThunk<
	Repository[], // Тип возвращаемых данных (если ничего не возвращаем, указываем void)
	{ searchInput: string; page: number }, // Тип аргументов
	{ state: RootState } // Тип getState
>('repositories/fetchByUsername', async (payload, thunkAPI) => {
	try {
		const { searchInput, page } = payload;

		const response = await gitHubRepositoriesApi.getRepositoriesByUsername(
			searchInput,
			page,
		);

		const repositories = parseRepositoriesResponse(response);

		return repositories;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
