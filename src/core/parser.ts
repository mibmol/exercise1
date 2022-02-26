import { DateRangeRegex } from './constants';
import { TimeObj, WorkSchedule } from './types';

/**
 * Creates a manageable object from a work schedule string.
 * Throw a Error if the provided string do not pass the validation. See ./constants.ts
 * @param {string} pattern A valid work schedule string that match the expression defined on DateRangeRegex
 * @returns {{personName: string, schedule: WorkSchedule}} An object with the personName and a WorkSchedule object
 */
export function parseScheduleObj(pattern: string) {
	if (!validateFormat(pattern)) {
		throw Error('Invalid Format');
	}
	const [personName, values] = pattern.trim().split('=');
	const schedule: WorkSchedule = {};

	for (const s of values.split(',')) {
		const dayPrefix = s.substring(0, 2);
		const [startTimeString, endTimeString] = s.substring(2).split('-');
		const times = {
			start: parseTime(startTimeString),
			end: parseTime(endTimeString),
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

/**
 * Check for a valid string pattern. It uses the DateRangeRegex regex
 * @param {string} pattern A string that represents a work schedule
 * @returns {boolean} True if a valid pattern is provided, False otherwise
 */
export function validateFormat(pattern: string): boolean {
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

/**
 * Transform string with format HH:mm to an {hour, minute} object
 * @param timeString
 * @returns
 */
export function parseTime(timeString: string): TimeObj {
	const [hour, minute] = timeString.split(':');
	return {
		hour: parseInt(hour),
		minute: parseInt(minute),
	};
}

/**
 *
 * @param {TimeObj} t1
 * @param {TimeObj} t2
 * @returns {number} Returns a positive number if t1 > t2, 0 if equal, and negative if t1 < t2
 */
function compareTimes(t1: TimeObj, t2: TimeObj) {
	let minutesT1 = t1.hour * 60 + t1.minute;
	let minutesT2 = t2.hour * 60 + t2.minute;
	return minutesT1 - minutesT2;
}
