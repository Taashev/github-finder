import { Container, styled } from '@mui/material';

export const AppContainer = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	minWidth: theme.breakpoints.values.xs,
	maxWidth: theme.breakpoints.values.xl,
	minHeight: '100dvh',
}));
