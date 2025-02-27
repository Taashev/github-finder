import { useCallback } from 'react';

import { Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { useAppDispatch, useAppSelector } from '../../service/store';
import { fetchRepositoriesByUsername } from '../../service/store/repositories/thunks';
import { RepositoryCard } from '../repository-card/repository-card';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export function RepositoryList() {
	const dispatch = useAppDispatch();

	const repositories = useAppSelector((state) => state.repositories.list);
	const page = useAppSelector((state) => state.repositories.page);
	const searchInput = useAppSelector((state) => state.search.value);
	const isLoading = useAppSelector((state) => state.repositories.isLoading);
	const nextRequestAllowed = useAppSelector(
		(state) => state.repositories.nextRequestAllowed,
	);

	const loadMore = useCallback(() => {
		if (repositories.length !== 0 && nextRequestAllowed) {
			dispatch(fetchRepositoriesByUsername({ searchInput, page: page + 1 }));
		}
	}, [repositories, nextRequestAllowed]);

	const observerRef = useInfiniteScroll(loadMore, {
		rootMargin: '0px 0px 300px 0px',
		deps: [repositories],
	});

	return (
		<Box
			flexGrow={1}
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			paddingBlock={2}
		>
			<Grid
				container
				width={'100%'}
				spacing={2}
				display={'grid'}
				justifyContent={'space-between'}
				gridTemplateColumns={{
					xxs: '1fr',
					md: 'repeat(auto-fit, minmax(300px, 400px))',
				}}
			>
				{repositories.map((repo) => {
					return <RepositoryCard key={repo.id} data={repo} />;
				})}
				<div ref={observerRef}></div>
			</Grid>
			{isLoading && <CircularProgress />}
		</Box>
	);
}
