export interface IResponseAPI<T> {
	status?: number; // HTTP Code
	message?: unknown;
	results?: T[];
	metadata?: IPagination; // Pagination data
}

export interface IPagination {
	total?: number;
	skip: number;
	take: number;
	currentCursor?: string;
	nextCursor?: string;
}

export interface IPaginationAndSearch<T, S = unknown> {
	take?: number | undefined;
	skip?: number | undefined;
	search?: T | undefined;
	orderBy?: S | undefined;
}