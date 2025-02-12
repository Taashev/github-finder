import { createAsyncThunk } from '@reduxjs/toolkit';

import { Repository } from './types';

import { RootState } from '..';
import { gitHubRepositoriesApi } from '../../api/github-api/github-repositories-api';
import { normalizeRepositoriesResponse } from '../../../utils/normalize-repositories-response';

export const fetchRepositoriesByUsername = createAsyncThunk<
	Repository[], // Тип возвращаемых данных (если ничего не возвращаем, указываем void)
	{ searchInput: string; page: number }, // Тип аргументов
	{ state: RootState } // Тип getState
>('api/fetchByUsername', async (payload, thunkAPI) => {
	try {
		const { searchInput, page } = payload;

		const response = await gitHubRepositoriesApi.getRepositoriesByUsername(
			searchInput,
			page,
		);

		const normalizeResponse = normalizeRepositoriesResponse(response);

		return normalizeResponse;
	} catch (error) {
    console.log(error);
		return thunkAPI.rejectWithValue(error);
	}
});
