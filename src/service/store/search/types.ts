type Value = string;
type Error = string | null;
type isError = boolean;

export type searchState = {
	value: Value;
	error: Error;
	isError: isError;
};
