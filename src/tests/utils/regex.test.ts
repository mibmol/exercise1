import { DateRangeRegex } from "core/constants";

describe('Test DateRangeRegex', () => {
	const validSamples = [
		'MO10:00-12:00',
		'TU10:00-12:00',
		'TH01:00-03:00',
		'SA14:00-18:00',
		'SU20:00-21:00',
		'MO10:00-12:00',
		'TH12:00-14:00',
		'SU20:00-21:00',
	];

	const invalidSamples = [
		'MA10:00-12:00',
		'TU34:00-12:00',
		'TH01:60-03:00',
		'SA14:00-18-00',
		'SUU20:00-21:00',
		'mo10:00-12:00',
		'TH 12:00-14:00',
		'SU0:00-21:00',
	];

	test('It should accept all provided string', () => {
		for (let sample of validSamples) {
			expect(sample).toMatch(DateRangeRegex);
		}
	});

	test("It shouldn't accept any provided string", () => {
		for (let sample of invalidSamples) {
			expect(sample).not.toMatch(DateRangeRegex);
		}
	});
});
