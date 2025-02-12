import { Repository } from '../service/store/repositories/types';

export function normalizeRepositoriesResponse(array: unknown): Array<Repository> {
	if (!Array.isArray(array)) {
		throw new Error('Некорректный формат данных');
	}

	return array.map((repo) => ({
		id: Number(repo.id),
		name: String(repo.name),
		html_url: String(repo.html_url),
		description: repo.description ? String(repo.description) : null,
		stargazers_count: Number(repo.stargazers_count),
	}));
}
