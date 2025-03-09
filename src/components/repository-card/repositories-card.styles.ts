import { theme } from '../../theme/theme';

export const repositoryCardStyles = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
};

export const repositoryCardContentStyles = {
	flexGrow: 1,
};

export const repositoryCardOwnerStyles = {
	color: 'darkgrey',
};

export const repositoryCardActionsContainerStyles = {
	justifyContent: 'end',
	padding: theme.spacing(2),
};

export const repositoryCardStarIconBoxStyles = {
	display: 'flex',
	alignItems: 'center',
	gap: 0.3,
};

export const repositoryCardStarIconStyles = {
	color: 'gold',
};
