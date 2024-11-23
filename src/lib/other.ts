// Example: 2000000 -> 2,000,000
export const numberWithCommas = (num: number) => {
	return num?.toLocaleString('en-US', { useGrouping: true });
};