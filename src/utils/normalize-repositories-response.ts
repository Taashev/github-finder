import { Repository } from '../service/store/repositories/types';

export function parseRepositoriesResponse(
	dataResponse: unknown,
): Array<Repository> {
	if (!Array.isArray(dataResponse)) {
		throw new Error('Некорректный формат данных');
	}

	return dataResponse.map((repo) => ({
		id: Number(repo.id),
		name: String(repo.name),
		html_url: String(repo.html_url),
		description: repo.description ? String(repo.description) : null,
		stargazers_count: Number(repo.stargazers_count),
		updatedAt: String(repo.updated_at),
		owner: {
			id: Number(repo.owner.id),
			login: String(repo.owner.login),
		},
	}));
}
