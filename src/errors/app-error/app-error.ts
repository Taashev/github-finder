import { AppErrorDetails, AppErrorMessage } from "./types";

const APP_ERROR_TYPE = 'app';

export class AppError extends Error {
	details: AppErrorDetails;

	constructor(message: AppErrorMessage, details: AppErrorDetails = {}) {
		super(message);
		this.name = 'AppError';
		this.details = { errorType: APP_ERROR_TYPE, ...details };
	}
}
