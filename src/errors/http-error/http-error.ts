import {
	AppError,
	AppErrorMessage,
	AppErrorDetails,
} from '../app-error/app-error';

const HTTP_ERROR_TYPE = 'http';

export type HttpUrl = RequestInfo | URL;
export type HttpStatusCode = number;
export type HttpOriginError = unknown;

export type HttpErrorDetails = AppErrorDetails & {
	url: HttpUrl;
	statusCode: HttpStatusCode;
	originError: HttpOriginError;
};

export class HttpError extends AppError {
	declare details: HttpErrorDetails;

	constructor(message: AppErrorMessage, details: HttpErrorDetails) {
		super(message, { errorType: HTTP_ERROR_TYPE, ...details });
		this.name = 'HttpError';
	}
}
