import {
	Card,
	CardActions,
	CardContent,
	Typography,
	IconButton,
	Box,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Repository } from '../../service/store/repositories/types';

import { repositoryCardSx } from './repositories-card-theme';
import { formatDate } from '../../utils/format-date';

type CardProps = {
	data: Repository;
};

export function RepositoryCard(props: CardProps) {
	const { data } = props;

	const lastUpdatedAt = formatDate(data.updatedAt);

	return (
		<Card variant="outlined" sx={repositoryCardSx.card}>
			<CardContent sx={repositoryCardSx.content}>
				<Typography variant="h5">{data.name}</Typography>
				<Typography sx={{ color: 'darkgrey' }}>{data.owner.login}</Typography>
				<Typography variant="body2">{data.description}</Typography>
			</CardContent>
			<CardActions sx={repositoryCardSx.actionsContainer}>
				<Typography sx={{ mr: 'auto' }}>Обновлено: {lastUpdatedAt}</Typography>
				<Box sx={repositoryCardSx.starIconBox}>
					<StarIcon sx={repositoryCardSx.starIcon} />
					{data.stargazers_count}
				</Box>
				<IconButton target="_blank" href={data.html_url} size="small">
					<GitHubIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
