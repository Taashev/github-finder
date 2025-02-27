import { ChangeEvent, useCallback, useState } from 'react';
import { TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../service/store';
import { fetchRepositoriesByUsername } from '../../service/store/repositories/thunks';
import { repositoriesActions } from '../../service/store/repositories/repositories.slice';
import { searchActions } from '../../service/store/search/search.slice';
import { useDebounce } from '../../hooks/useDebounce';

export function SearchBar() {
	const dispatch = useAppDispatch();
	const searchError = useAppSelector((state) => state.search.error);
	const [searchInput, setSearchInput] = useState('');

	const handleSearch = useCallback(
		function () {
			if (searchInput.trim().length > 0) {
				dispatch(repositoriesActions.resetRepositories());
				dispatch(fetchRepositoriesByUsername({ searchInput, page: 1 }));
			}
		},
		[dispatch, searchInput],
	);

	useDebounce(handleSearch, [searchInput]);

	function handlerSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
		if (searchError !== null) {
			dispatch(searchActions.resetError());
		}

		setSearchInput(e.target.value);
	}

	return (
		<TextField
			label="Поиск"
			variant="outlined"
			fullWidth
			onChange={handlerSearchInputChange}
			value={searchInput}
			error={searchError !== null}
			helperText={searchError}
		/>
	);
}
