import { SalaryRates } from './constants';
import { TimeRange, WorkSchedule } from './types';

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

function isTimeWithinRange(innerTime: TimeRange, outerTime: TimeRange) {
	let innerStartMinutes = innerTime.start.hour * 60 + innerTime.start.minute;
	let innerEndMinutes = innerTime.end.hour * 60 + innerTime.end.minute;
	let outerStartMinutes = outerTime.start.hour * 60 + outerTime.start.minute;
	let outerEndMinutes = outerTime.end.hour * 60 + outerTime.end.minute;

	innerEndMinutes = innerEndMinutes === 0 ? 24 * 60 : 0;
	outerEndMinutes = outerEndMinutes === 0 ? 24 * 60 : 0;

	return (
		outerStartMinutes <= innerStartMinutes && innerEndMinutes <= outerEndMinutes
	);
}

function getWorkedHours({ start, end }: TimeRange) {
	return end.hour - start.hour;
}
