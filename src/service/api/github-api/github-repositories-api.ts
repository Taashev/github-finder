import { GitHubApi, GitHubApiKey } from './github-api';

import { BaseApiUrl } from '../base-api';

import {
	GITHUB_API_KEY,
	GITHUB_BASE_URL,
	PER_PAGE_COUNT,
} from '../../../utils/constants';
import {
	GITHUB_ERRORS_TYPE,
	GitHubError,
} from '../../../errors/github-error/github-error';
import { HttpError } from '../../../errors/http-error/http-error';

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
			const statusCode = error.details.statusCode;

			let message;
			let description;

			switch (statusCode) {
				case 403:
					message = 'Превышен лимит запросов';
					description =
						'Превышен допустимый лимит запросов в минуту. Попробуйте еще раз немного позже';
					break;
				case 404:
					message = 'Пользователь не найден';
					break;
				default:
					message = error.message;
			}

			throw new GitHubError(message, {
				...error.details,
				description,
				errorType: GITHUB_ERRORS_TYPE.REPOSITORIES_BY_USERNAME,
			});
		});
	}
}

export const gitHubRepositoriesApi = new GitHubRepositoriesApi(
	GITHUB_BASE_URL,
	GITHUB_API_KEY,
);
