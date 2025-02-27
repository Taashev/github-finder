import { Middleware } from '@reduxjs/toolkit';

import { searchActions } from '../search/search.slice';
import { HttpError } from '../../../errors/http-error/http-error';
import { GITHUB_ERRORS_TYPE } from '../../../errors/github-error/github-error';
import { appNotificationActions } from '../app-notification/app-notification.slice';

interface ActionErrorMiddleware {
	type: string;
	payload: HttpError;
}

export const errorMiddleware: Middleware = (store) => (next) => (action) => {
	const dispatch = store.dispatch;

	const errorAction = action as ActionErrorMiddleware;
	const actionType = errorAction.type;

	const isRejected = actionType.endsWith('rejected');

	if (isRejected) {
		const error = errorAction.payload;

		if (
			error.details.errorType === GITHUB_ERRORS_TYPE.REPOSITORIES_BY_USERNAME
		) {
			if (error.details.statusCode === 404) {
				dispatch(searchActions.setError(error.message));
			} else {
				dispatch(
					appNotificationActions.createError({
						message: error.message,
						description: error.details.description,
					}),
				);
			}
		}
	}

	next(action);
};
