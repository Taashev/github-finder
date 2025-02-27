import { Box } from '@mui/material';

import { useAppSelector } from '../../service/store';
import { AlertFactory } from '../alert-factory/alert-factory';

export function AlertList() {
	const notifications = useAppSelector((store) => store.appNotification.stack);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				rowGap: 1,
				width: '100%',
				maxWidth: {
					xxs: '280px',
					md: 'clamp(320px, 30%, 350px)',
				},
				maxHeight: '90vh',
				position: 'fixed',
				top: 20,
				right: 10,
				overflowY: 'auto',
				boxShadow: 3,
				borderRadius: 1,
				zIndex: 10,
			}}
		>
			{notifications &&
				notifications.map((notification) => {
					return (
						<AlertFactory
							key={notification.id}
							id={notification.id}
							type={notification.type}
							data={notification.data}
						/>
					);
				})}
		</Box>
	);
}
