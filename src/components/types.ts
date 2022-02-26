export type Result = {
	personName?: string;
	amount?: number;
	hasError: boolean;
	errorMsg?: string;
	lineNumber?: number;
	isEmptyLine: boolean;
};
