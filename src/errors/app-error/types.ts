export type AppErrorType = string;
export type AppErrorMessage = string;

export type AppErrorDetails = {
	errorType?: AppErrorType;
	[key: string]: unknown;
};
