import { Typography } from '@mui/material';

import { SearchBar } from '../search-bar/search-bar';

import styles from './App.module.css';

export function App() {
	return (
		<div className={styles.app}>
			<Typography
				className={styles.title}
				variant="h1"
				gutterBottom
				fontSize={40}
			>
				GitHub Finder
			</Typography>
			<SearchBar />
		</div>
	);
}
