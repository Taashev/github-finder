import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const repositoryCardSx: Record<string, SxProps<Theme>> = {
	card: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	content: {
		flexGrow: 1,
	},
	actionsContainer: { justifyContent: 'end' },
	starIconBox: { display: 'flex', alignItems: 'center', gap: 0.3 },
	starIcon: { color: 'gold' },
};
