const APP_ERROR_TYPE = 'app';

export type AppErrorType = string;
export type AppErrorMessage = string;
export type AppErrorDescription = string;

export type AppErrorDetails = {
	errorType?: AppErrorType;
	description?: AppErrorDescription;
	[key: string]: unknown;
};

export class AppError extends Error {
	details: AppErrorDetails;

	constructor(message: AppErrorMessage, details: AppErrorDetails = {}) {
		super(message);
		this.name = 'AppError';
		this.details = { errorType: APP_ERROR_TYPE, ...details };
	}
}
