import { BaseApi, BaseApiType } from '../base-api';

export type GitHubApiType = BaseApiType & { apiKey?: string };

export class GitHubApi extends BaseApi {
	protected _apiKey: string | undefined;

	constructor({ baseUrl, apiKey }: GitHubApiType) {
		super({ baseUrl });

		this._auth = this._auth.bind(this);

		this._apiKey = apiKey;
	}

	protected async _request(
		url: string,
		method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
		headers: HeadersInit = { 'Content-Type': 'application/json' },
		body?: BodyInit,
	) {
		const options: RequestInit = {
			method,
			headers,
		};

		this._auth(options);

		if (body && method !== 'GET') {
			options.body = JSON.stringify(body);
		}

		return fetch(url, options).then(this._checkResponse);
	}

	protected async _auth(options: RequestInit) {
		if (this._apiKey) {
			options.headers = { ...options.headers, Authorization: this._apiKey };
		}
	}
}
