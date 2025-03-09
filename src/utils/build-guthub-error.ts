import {
	GITHUB_ERRORS_TYPE,
	GitHubError,
} from '../errors/github-error/github-error';
import { HttpError } from '../errors/http-error/http-error';

export function buildGitHubError(error: HttpError) {
	const statusCode = error.details.statusCode;

	let message;

	switch (statusCode) {
		case 403:
			message = 'Превышен лимит запросов. Попробуйте немного позже';
			break;
		case 404:
			message = 'Пользователь не найден';
			break;
		case 429:
			message =
				'Сработала защита DDoS атаки, вы сделали слишком много запросов. Попробуйте немного позже';
			break;
		default:
			message = error.message;
	}

	return new GitHubError(message, {
		...error.details,
		errorType: GITHUB_ERRORS_TYPE.REPOSITORIES_BY_USERNAME,
	});
}
