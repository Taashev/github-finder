import { GitHubApi, GitHubApiKey } from './github-api';

import { BaseApiUrl } from '../base-api';

import {
	VITE_GITHUB_API_KEY,
	GITHUB_BASE_URL,
	PER_PAGE_COUNT,
} from '../../../utils/constants';
import { HttpError } from '../../../errors/http-error/http-error';
import { buildGitHubError } from '../../../utils/build-guthub-error';

class GitHubRepositoriesApi extends GitHubApi {
	constructor(baseUrl: BaseApiUrl, apiKey?: GitHubApiKey) {
		super(baseUrl, apiKey);
	}

	getRepositoriesByUsername(username: string, page: number = 1) {
		return this._request(
			this._baseUrl +
				`/users/${username}/repos` +
				`?per_page=${PER_PAGE_COUNT}` +
				`&page=${page}`,
		).catch((error: HttpError) => {
			throw buildGitHubError(error);
		});
	}
}

export const gitHubRepositoriesApi = new GitHubRepositoriesApi(
	GITHUB_BASE_URL,
	VITE_GITHUB_API_KEY,
);
