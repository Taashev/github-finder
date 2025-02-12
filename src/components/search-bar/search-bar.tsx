import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../service/store';
import { fetchRepositoriesByUsername } from '../../service/store/repositories/thunks';

export function SearchBar() {
	const dispatch = useAppDispatch();
	const error = useAppSelector((state) => state.search.error);
	const isError = useAppSelector((state) => state.search.isError);

	const [searchInput, setSearchInput] = useState('');

	const timeoutIdRef = useRef<number | null>(null);

	useEffect(() => {
		if (searchInput.trim().length > 0) {
			timeoutIdRef.current = setTimeout(() => {
				dispatch(
					fetchRepositoriesByUsername({
						searchInput,
						page: 1,
					}),
				);
			}, 1000);
		}

		return () => {
			if (timeoutIdRef.current !== null) {
				clearTimeout(timeoutIdRef.current);
			}
		};
	}, [dispatch, searchInput]);

	function handlerSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
		setSearchInput(e.target.value);
	}

	return (
		<div>
			<Box paddingInline={2}>
				<TextField
					id="standard-basic"
					label="Поиск"
					variant="outlined"
					fullWidth
					required
					slotProps={{ htmlInput: { minLength: 1 } }}
					onChange={handlerSearchInputChange}
					error={isError}
					helperText={error}
					value={searchInput}
				/>
			</Box>
		</div>
	);
}
