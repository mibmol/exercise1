import { TimeRange } from './types';


/**
 * Regex to check a valid pattern for a person work schedule.
 * Valid expressions: 
 * 		RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
 *    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
 */
export const DateRangeRegex =
	/^(MO|TU|WE|TH|FR|SA|SU)(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\-(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;

/**
 * SalaryRates: reprents the rates to be applied to the worked hours, given the day and time ranges
 * From monday to friday (MO - FR) the rates are the same.
 */
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
