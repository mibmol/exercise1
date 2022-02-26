import { getPaymentAmount } from 'core/algorithm';
import { parseScheduleObj } from 'core/parser';

const calculatedAmountSamples = [
	{
		string:
			'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
		result: 215,
	},
	{
		string: 'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
		result: 85,
	},
	{
		string: 'MIKE=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
		result: 85,
	},
	{
		string: 'JOHN=MO10:00-12:00,TH12:00-14:00,SA14:00-18:00,SU20:00-21:00',
		result: 165,
	},
];

describe('Test Algorithm parsing', () => {
	test('The algorithm should calculate the total amount to pay correctly', () => {
		for (const sample of calculatedAmountSamples) {
			const { schedule } = parseScheduleObj(sample.string);
			const result = getPaymentAmount(schedule);
			expect(result).toBe(sample.result);
		}
	});
});
