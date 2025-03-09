import { HttpError, HttpUrl } from '../../errors/http-error/http-error';

export type BaseApiBaseUrl = HttpUrl;
export type BaseApiUrl = HttpUrl;

export class BaseApi {
	protected _baseUrl: BaseApiBaseUrl;
	protected _url: HttpUrl = '';

	constructor(baseUrl: BaseApiUrl) {
		this._baseUrl = baseUrl;

		this._checkResponse = this._checkResponse.bind(this);
	}

	protected async _checkResponse(response: Response) {
		const statusCode = response.status;
		const contentType = response.headers.get('Content-Type') as string;

		const payload = await this._parseResponse(response, contentType);

		if (!response.ok) {
			const error = this._createError(
				Number(payload.status) || statusCode,
				payload,
			);
			throw error;
		}

		return payload;
	}

	protected async _parseResponse(response: Response, contentType: string) {
		if (contentType.includes('application/json')) {
			return await response.json();
		}

		if (contentType.includes('application/octet-stream')) {
			return await response.blob();
		}

		return await response.text();
	}

	private _normalizeBodyRequest(options: RequestInit): void {
		if (options.method === 'GET' && options.body) {
			this._deleteBodyRequest(options);
			return;
		}

		if (options.body) {
			this._serializeBodyRequest(options);
		}
	}

	private _serializeBodyRequest(options: RequestInit) {
		options.body = JSON.stringify(options.body);
	}

	private _deleteBodyRequest(options: RequestInit) {
		delete options.body;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected _createError(statusCode: number, errorData: any): HttpError {
		const url = this._url;
		const originError = errorData;
		const message =
			errorData?.message ?? 'Что то пошло не так. Попробуйте еще раз.';

		return new HttpError(message, {
			statusCode,
			originError,
			url,
		});
	}

	protected _request(url: RequestInfo | URL, options: RequestInit = {}) {
		this._url = url;

		options.method ??= 'GET';

		options.headers = {
			'Content-Type': 'application/json',
			...options.headers,
		};

		this._normalizeBodyRequest(options);

		return fetch(url, options)
			.then(this._checkResponse)
			.catch((error) => {
				throw error;
			});
	}
}
