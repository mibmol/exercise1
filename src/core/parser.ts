import { DateRangeRegex } from './constants';
import { TimeObj, WorkSchedule } from './types';

// RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
export function parseScheduleObj(pattern: string) {
	if (!validateFormat(pattern)) {
		throw Error('Invalid Format');
	}
	const [personName, values] = pattern.trim().split('=');
	const schedule: WorkSchedule = {};

	for (const s of values.split(',')) {
		const dayPrefix = s.substring(0, 2);
		const [startTime, endTime] = s.substring(2).split('-');
		const times = {
			start: parseTime(startTime),
			end: parseTime(endTime),
		};
		if (compareTimes(times.start, times.end) >= 0) {
			throw Error(
				"Invalid Format: Starting time can't be equal or greater than End time",
			);
		}
		schedule[dayPrefix] = times;
	}
	return { personName, schedule };
}

function validateFormat(pattern: string) {
	if (pattern == null || typeof pattern !== 'string') {
		return false;
	}
	const [personName, values] = pattern.trim().split('=');
	if (personName.length < 1 || !values || values.length < 1) {
		return false;
	}
	for (const scheduleString of values.split(',')) {
		if (!DateRangeRegex.test(scheduleString)) {
			return false;
		}
	}
	return true;
}

export function parseTime(timeString: string): TimeObj {
	const [hour, minute] = timeString.split(':');
	return {
		hour: parseInt(hour),
		minute: parseInt(minute),
	};
}

function compareTimes(t1: TimeObj, t2: TimeObj) {
	let minutesT1 = t1.hour * 60 + t1.minute;
	let minutesT2 = t2.hour * 60 + t2.minute;
	if (minutesT1 > minutesT2) return 1;
	return minutesT1 === minutesT2 ? 0 : -1;
}
