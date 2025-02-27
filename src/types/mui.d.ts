import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xxs: true; // Добавляем новый брейкпоинт
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}
