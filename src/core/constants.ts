import { TimeRange } from './types';

export const DateRangeRegex =
	/^(MO|TU|WE|TH|FR|SA|SU)(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\-(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;

export const SalaryRates: {
	[day: string]: (TimeRange & { rate: number })[];
} = {
	// Monday
	MO: [
		{ start: { hour: 0, minute: 1 }, end: { hour: 9, minute: 0 }, rate: 25 },
		{ start: { hour: 9, minute: 1 }, end: { hour: 18, minute: 0 }, rate: 15 },
		{ start: { hour: 18, minute: 1 }, end: { hour: 0, minute: 0 }, rate: 20 },
	],
	// Tuesday
	TU: [
		{ start: { hour: 0, minute: 1 }, end: { hour: 9, minute: 0 }, rate: 25 },
		{ start: { hour: 9, minute: 1 }, end: { hour: 18, minute: 0 }, rate: 15 },
		{ start: { hour: 18, minute: 1 }, end: { hour: 0, minute: 0 }, rate: 20 },
	],
	// Wednesday
	WE: [
		{ start: { hour: 0, minute: 1 }, end: { hour: 9, minute: 0 }, rate: 25 },
		{ start: { hour: 9, minute: 1 }, end: { hour: 18, minute: 0 }, rate: 15 },
		{ start: { hour: 18, minute: 1 }, end: { hour: 0, minute: 0 }, rate: 20 },
	],
	// Thursday
	TH: [
		{ start: { hour: 0, minute: 1 }, end: { hour: 9, minute: 0 }, rate: 25 },
		{ start: { hour: 9, minute: 1 }, end: { hour: 18, minute: 0 }, rate: 15 },
		{ start: { hour: 18, minute: 1 }, end: { hour: 0, minute: 0 }, rate: 20 },
	],
	// Friday
	FR: [
		{ start: { hour: 0, minute: 1 }, end: { hour: 9, minute: 0 }, rate: 25 },
		{ start: { hour: 9, minute: 1 }, end: { hour: 18, minute: 0 }, rate: 15 },
		{ start: { hour: 18, minute: 1 }, end: { hour: 0, minute: 0 }, rate: 20 },
	],
	// Saturday
	SA: [
		{ start: { hour: 0, minute: 1 }, end: { hour: 9, minute: 0 }, rate: 30 },
		{ start: { hour: 9, minute: 1 }, end: { hour: 18, minute: 0 }, rate: 20 },
		{ start: { hour: 18, minute: 1 }, end: { hour: 0, minute: 0 }, rate: 25 },
	],
	// Sunday
	SU: [
		{ start: { hour: 0, minute: 1 }, end: { hour: 9, minute: 0 }, rate: 30 },
		{ start: { hour: 9, minute: 1 }, end: { hour: 18, minute: 0 }, rate: 20 },
		{ start: { hour: 18, minute: 1 }, end: { hour: 0, minute: 0 }, rate: 25 },
	],
};
