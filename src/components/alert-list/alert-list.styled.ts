import { Box, styled } from '@mui/material';

export const AlertListStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	rowGap: theme.spacing(1),
	width: '100%',
	maxWidth: 280,
	maxHeight: '90vh',
	position: 'fixed',
	top: 20,
	right: 10,
	overflowY: 'auto',
	boxShadow: theme.shadows[3],
	borderRadius: theme.shape.borderRadius,
	zIndex: 10,

	[theme.breakpoints.up('md')]: {
		maxWidth: 'clamp(320px, 30%, 350px)',
	},
}));
