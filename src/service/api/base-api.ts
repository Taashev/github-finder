import { AppError } from '../../types/app-error';

export type BaseApiType = {
	baseUrl: string;
};

export class BaseApi {
	protected _baseUrl: string;

	constructor({ baseUrl }: BaseApiType) {
		this._baseUrl = baseUrl;

		this._checkResponse = this._checkResponse.bind(this);
	}

	protected async _checkResponse(response: Response) {
		const contentType = response.headers.get('Content-Type');

		const payload =
			contentType && (await this._parseResponse(response, contentType));

		if (response.ok) {
			return payload;
		}

		const error = this._createAppError(response.status, payload);

		throw error;
	}

	protected async _parseResponse(response: Response, contentType: string) {
		if (contentType.includes('application/json')) {
			return await response.json();
		}

		if (contentType.includes('application/octet-stream')) {
			return await response.blob();
		}

		if (
			contentType.includes('application/xml') ||
			contentType.includes('text/html') ||
			contentType.includes('text/xml') ||
			contentType.includes('text/')
		) {
			return await response.text();
		}

		return await response.text();
	}

	private _createAppError(status: number, errorData: any): AppError {
		return {
			status,
			message: errorData?.message || 'Неизвестная ошибка',
			details: errorData,
		};
	}
}
