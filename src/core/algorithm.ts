import { SalaryRates } from './constants';
import { TimeRange, WorkSchedule } from './types';

/**
 *
 * @param {WorkSchedule} schedule Object representation of the work schedule of a person in a week.
 * @returns {number} Returns the total amount to pay for the given schedule
 */
export function getPaymentAmount(schedule: WorkSchedule): number {
	let total = 0;
	const daysKeys = Object.keys(schedule);
	for (const day of daysKeys) {
		const daySchedule = schedule[day];
		const workedHours = getWorkedHours(daySchedule);
		const rate = SalaryRates[day].find((r) => isTimeWithinRange(daySchedule, r));
		if (rate !== undefined) {
			total += rate.rate * workedHours;
		}
	}

	return total;
}

/**
 *
 * @param innerTime
 * @param outerTime
 * @returns {boolean} Return true if the innerTime range is within the outerTime Rang. False otherwise
 */
function isTimeWithinRange(innerTime: TimeRange, outerTime: TimeRange): boolean {
	let innerStartMinutes = innerTime.start.hour * 60 + innerTime.start.minute;
	let innerEndMinutes = innerTime.end.hour * 60 + innerTime.end.minute;
	let outerStartMinutes = outerTime.start.hour * 60 + outerTime.start.minute;
	let outerEndMinutes = outerTime.end.hour * 60 + outerTime.end.minute;

	innerEndMinutes = innerEndMinutes === 0 ? 23 * 60 : innerEndMinutes;
	outerEndMinutes = outerEndMinutes === 0 ? 23 * 60 : outerEndMinutes;

	return (
		outerStartMinutes <= innerStartMinutes && innerEndMinutes <= outerEndMinutes
	);
}

/**
 *
 * @param {TimeRange} param And object representing the start and end of worked hours
 * @returns {number} Returns the diference of hours from start to end
 */
function getWorkedHours({ start, end }: TimeRange): number {
	return end.hour - start.hour;
}
