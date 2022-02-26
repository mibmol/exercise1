import { parseScheduleObj, validateFormat } from 'core/parser';
import { isDeepStrictEqual } from 'util';
import { parsedScheduleSamples } from './mocks';

describe('Test string format validation', () => {
	const validSamples = [
		'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
		'ASTRID2=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
		'E=MO10:30-13:45,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
		'ASTRID3=MO11:00-12:30,TH12:00-14:00,SU20:00-21:10',
		'USER=SU20:00-21:00',
		'USER=MO10:00-13:30',
		'USER=TH04:00-14:00',
		'USER=SU20:00-21:00',
	];

	const invalidSamples = [
		null,
		'',
		'=MOO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
		'ASTRID2=MO10:00-12:00,TH12:00-14:00,,SU20:00-21:00',
		'RENE=MO10:00-12:00,TU10:00-12:0,TH01:00-0000,S14:00-18:00,SU20:00-21:00',
		'ASTRID3==MO10:00-12:00,TH12:00-14:00,SU20:00--21:00',
		'Hello=',
		'Nope',
		'USER=SU2zxcvxzcv0:00-21:00',
		'USER=M1:00-12:00',
		'USER=TH25:00-14:00',
		'USER=SU20::00-21:00',
	];

	test('It should accept all provided string', () => {
		for (let sample of validSamples) {
			expect(validateFormat(sample)).toBeTruthy();
		}
	});

	test("It shouldn't accept any provided string", () => {
		for (let sample of invalidSamples) {
			expect(validateFormat(sample as any)).toBeFalsy();
		}
	});
});

describe('Test Schedule parsing', () => {
	const parsingSamples = parsedScheduleSamples;
	const errorSamples = [
		'RENE=MO10:00-12:00,TU10:00-10:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
		'ASTRID2=MO10:00-9:00,TH12:00-14:00,SU20:00-21:00',
	];

	test('It should throw Validation Error', () => {
		for (let sample of errorSamples) {
			expect(() => parseScheduleObj(sample)).toThrow(Error);
		}
	});

	test('It should parse all provided string correctly', () => {
		for (let sample of parsingSamples) {
			let parsingResult = parseScheduleObj(sample.string);
			expect(isDeepStrictEqual(parsingResult, sample.result)).toBeTruthy();
		}
	});
});
