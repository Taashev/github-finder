import { AlertFactoryData } from './types';

import { useAppDispatch } from '../../service/store';
import { ErrorAlert } from './error-alert/error-alert';
import { appNotificationActions } from '../../service/store/app-notification/app-notification.slice';
import { SyntheticEvent } from 'react';

const Alerts = {
	error: ErrorAlert,
};

export type AlertFactoryProps = {
	id: string;
	type: keyof typeof Alerts;
	data: AlertFactoryData;
	onClose?: ((event: React.SyntheticEvent) => void) | undefined;
};

export function AlertFactory(props: AlertFactoryProps) {
	const { id, type, data, onClose } = props;

	const dispatch = useAppDispatch();

	function handlerButtonCloseAlert(e: SyntheticEvent) {
		if (onClose) {
			onClose(e);
		}

		dispatch(appNotificationActions.remove(id));
	}

	const AlertComponent = Alerts[type];

	if (!AlertComponent) {
		console.warn(`Unknown alert type: ${type}`);
		return null;
	}

	return <AlertComponent onClose={handlerButtonCloseAlert} {...data} />;
}
