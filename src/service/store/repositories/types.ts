export type Repository = {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	stargazers_count: number;
	updatedAt: string;
	owner: {
		id: number;
		login: string;
	};
};
