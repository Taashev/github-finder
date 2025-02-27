import { Typography } from '@mui/material';

import { SearchBar } from '../search-bar/search-bar';
import { RepositoryList } from '../repository-list/repository-list';
import { AlertList } from '../alert-list/alert-list';

import { AppContainer } from './app-theme';

export function App() {
	return (
		<AppContainer>
			<Typography
				variant="h4"
				component={'h1'}
				textAlign={'center'}
				gutterBottom
			>
				GitHub Finder
			</Typography>
			<SearchBar />
			<RepositoryList />

			<AlertList />
		</AppContainer>
	);
}
