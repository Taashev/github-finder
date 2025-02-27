import { ErrorAlertProps } from './error-alert/error-alert';

export type BaseAlertProps = {
	message: string;
	onClose?: ((event: React.SyntheticEvent) => void) | undefined;
};

export type AlertFactoryData = BaseAlertProps | ErrorAlertProps;
