import { GitHubApi, GitHubApiType } from './github-api';

import {
	GITHUB_API_KEY,
	GITHUB_BASE_URL,
	PER_PAGE_COUNT,
} from '../../../utils/constants';

class GitHubRepositoriesApi extends GitHubApi {
	constructor({ baseUrl, apiKey }: GitHubApiType) {
		super({ baseUrl, apiKey });
	}

	async getRepositoriesByUsername(username: string, page: number = 1) {
		return await this._request(
			this._baseUrl +
				`/users/${username}/repos` +
				`?per_page=${PER_PAGE_COUNT}` +
				`&page=${page}`,
		);
	}
}

export const gitHubRepositoriesApi = new GitHubRepositoriesApi({
	baseUrl: GITHUB_BASE_URL,
	apiKey: GITHUB_API_KEY,
});
