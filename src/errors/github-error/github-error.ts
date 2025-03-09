import { AppErrorMessage } from '../app-error/types';
import { HttpError, HttpErrorDetails } from '../http-error/http-error';

export enum GITHUB_ERRORS_TYPE {
	REPOSITORIES_BY_USERNAME = 'github/repositoriesByUsername',
}

type GitHubDetails = HttpErrorDetails & { errorType: GITHUB_ERRORS_TYPE };

export class GitHubError extends HttpError {
	constructor(message: AppErrorMessage, details: GitHubDetails) {
		super(message, details);
		this.name = 'GitHubError';
	}
}
