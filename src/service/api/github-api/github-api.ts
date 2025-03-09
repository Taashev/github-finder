import { BaseApi, BaseApiUrl } from '../base-api';

export type GitHubApiKey = string;

export class GitHubApi extends BaseApi {
	protected _apiKey?: GitHubApiKey;

	constructor(baseUrl: BaseApiUrl, apiKey?: GitHubApiKey) {
		super(baseUrl);
		this._apiKey = apiKey;
	}

	protected _request(url: RequestInfo | URL, options: RequestInit = {}) {
		this._addAuthHeader(options);

		return super._request(url, options);
	}

	private _addAuthHeader(options: RequestInit) {
		if (this._apiKey) {
			options.headers = { ...options.headers, Authorization: this._apiKey };
		}
	}
}
