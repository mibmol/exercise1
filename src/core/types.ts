
export type TimeObj = {
	hour: number;
	minute: number;
};


export type TimeRange = {
	start: TimeObj;
	end: TimeObj;
};

export type WorkSchedule = {
	[day: string]: TimeRange;
};