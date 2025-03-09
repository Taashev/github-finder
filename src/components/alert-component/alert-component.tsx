import { Alert, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch } from '../../service/store';
import { appNotificationActions } from '../../service/store/app-notification/app-notification.slice';

export type AlertComponentProps = {
	id: string;
	type: 'error';
	message: string;
};

export function AlertComponent(props: AlertComponentProps) {
	const { id, message, type } = props;

	const dispatch = useAppDispatch();

	function handlerButtonCloseAlert() {
		dispatch(appNotificationActions.remove(id));
	}

	return (
		<Alert
			severity={type}
			action={
				<IconButton
					aria-label="close"
					color="inherit"
					size="small"
					onClick={handlerButtonCloseAlert}
				>
					<CloseIcon fontSize="inherit" />
				</IconButton>
			}
		>
			<Typography variant="subtitle1">{message}</Typography>
		</Alert>
	);
}
