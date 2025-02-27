import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Alert,
	IconButton,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { BaseAlertProps } from '../types';

export type ErrorAlertProps = BaseAlertProps & { description?: string };

export function ErrorAlert(props: ErrorAlertProps) {
	const { message, description, onClose } = props;

	return (
		<Alert
			severity="error"
			action={
				<IconButton
					aria-label="close"
					color="inherit"
					size="small"
					onClick={onClose}
				>
					<CloseIcon fontSize="inherit" />
				</IconButton>
			}
		>
			<Typography variant="subtitle1">{message}</Typography>
			{description && (
				<Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
					<AccordionSummary
						expandIcon={<ArrowDownwardIcon />}
						sx={{ padding: 0, minHeight: 0 }}
					>
						<Typography variant="body2" color="info">
							Подробнее
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ padding: 0 }}>
						<Typography variant="body2">{description}</Typography>
					</AccordionDetails>
				</Accordion>
			)}
		</Alert>
	);
}
