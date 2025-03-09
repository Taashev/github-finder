import { useAppSelector } from '../../service/store';
import { AlertComponent } from '../alert-component/alert-component';
import { AlertListStyled } from './alert-list.styled';

export function AlertList() {
	const notifications = useAppSelector((store) => store.appNotification.stack);

	return (
		<AlertListStyled>
			{notifications &&
				notifications.map((notification) => {
					return <AlertComponent key={notification.id} {...notification} />;
				})}
		</AlertListStyled>
	);
}
