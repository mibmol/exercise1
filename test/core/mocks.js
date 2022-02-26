const parsedScheduleSamples = [
	{
		string:
			'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
		result: {
			personName: 'RENE',
			schedule: {
				MO: {
					start: { hour: 10, minute: 0 },
					end: { hour: 12, minute: 0 },
				},
				TU: {
					start: { hour: 10, minute: 0 },
					end: { hour: 12, minute: 0 },
				},
				TH: {
					start: { hour: 1, minute: 0 },
					end: { hour: 3, minute: 0 },
				},
				SA: {
					start: { hour: 14, minute: 0 },
					end: { hour: 18, minute: 0 },
				},
				SU: {
					start: { hour: 20, minute: 0 },
					end: { hour: 21, minute: 0 },
				},
			},
		},
	},
	{
		string: 'ASTRID2=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
		result: {
			personName: 'ASTRID2',
			schedule: {
				MO: {
					start: { hour: 10, minute: 0 },
					end: { hour: 12, minute: 0 },
				},
				TH: {
					start: { hour: 12, minute: 0 },
					end: { hour: 14, minute: 0 },
				},
				SU: {
					start: { hour: 20, minute: 0 },
					end: { hour: 21, minute: 0 },
				},
			},
		},
	},
	{
		string: 'ASTRID3=MO08:00-16:30,TH12:00-14:00,SU20:00-21:10',
		result: {
			personName: 'ASTRID3',
			schedule: {
				MO: {
					start: { hour: 8, minute: 0 },
					end: { hour: 16, minute: 30 },
				},
				TH: {
					start: { hour: 12, minute: 0 },
					end: { hour: 14, minute: 0 },
				},
				SU: {
					start: { hour: 20, minute: 0 },
					end: { hour: 21, minute: 10 },
				},
			},
		},
	},
];

module.exports = { parsedScheduleSamples };
