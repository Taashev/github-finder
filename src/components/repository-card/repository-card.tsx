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

import {
  repositoryCardActionsContainerStyles,
	repositoryCardContentStyles,
	repositoryCardOwnerStyles,
	repositoryCardStarIconBoxStyles,
	repositoryCardStarIconStyles,
	repositoryCardStyles,
} from './repositories-card.styles';
import { formatDate } from '../../utils/format-date';

type CardProps = {
	data: Repository;
};

export function RepositoryCard(props: CardProps) {
	const { data } = props;

	const lastUpdatedAt = formatDate(data.updatedAt);

	return (
		<Card variant="outlined" sx={repositoryCardStyles}>
			<CardContent sx={repositoryCardContentStyles}>
				<Typography variant="h5">{data.name}</Typography>
				<Typography sx={repositoryCardOwnerStyles}>
					{data.owner.login}
				</Typography>
				<Typography variant="body2">{data.description}</Typography>
			</CardContent>
			<CardActions sx={repositoryCardActionsContainerStyles}>
				<Typography sx={{ mr: 'auto' }}>Обновлено: {lastUpdatedAt}</Typography>
				<Box sx={repositoryCardStarIconBoxStyles}>
					<StarIcon sx={repositoryCardStarIconStyles} />
					{data.stargazers_count}
				</Box>
				<IconButton target="_blank" href={data.html_url} size="small">
					<GitHubIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

// export function RepositoryCard(props: CardProps) {
// 	const { data } = props;

// 	const lastUpdatedAt = formatDate(data.updatedAt);

// 	return (
// 		<Card variant="outlined" sx={repositoryCardStyles.card}>
// 			<CardContent sx={repositoryCardStyles.content}>
// 				<Typography variant="h5">{data.name}</Typography>
// 				<Typography sx={repositoryCardStyles.owner}>
// 					{data.owner.login}
// 				</Typography>
// 				<Typography variant="body2">{data.description}</Typography>
// 			</CardContent>
// 			<CardActions sx={repositoryCardStyles.actionsContainer}>
// 				<Typography sx={{ mr: 'auto' }}>Обновлено: {lastUpdatedAt}</Typography>
// 				<Box sx={repositoryCardStyles.starIconBox}>
// 					<StarIcon sx={repositoryCardStyles.starIcon} />
// 					{data.stargazers_count}
// 				</Box>
// 				<IconButton target="_blank" href={data.html_url} size="small">
// 					<GitHubIcon />
// 				</IconButton>
// 			</CardActions>
// 		</Card>
// 	);
// }
