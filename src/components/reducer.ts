import { getPaymentAmount } from 'core/algorithm';
import { parseScheduleObj } from 'core/parser';
import { Reducer } from 'react';
import { Result } from './types';

export const initialState = {
	results: [],
};

export enum CalcActions {
	calculateResults,
}

type AppState = typeof initialState;
type ActionType = { type: CalcActions; value: any };

export const calcReducer: Reducer<AppState, ActionType> = (
	prevState = initialState,
	action,
) => {
	switch (action.type) {
		case CalcActions.calculateResults:
			let lines = action.value
				.replaceAll(/(<div>)|(<br>)/gi, '') //
				.split('</div>');
			return {
				results: lines.map(transformResult),
			};
		default:
			return prevState;
	}
};

export function transformResult(stringPattern: string, index: number): Result {
	let isEmptyLine = stringPattern.trim() === '';
	try {
		let { personName, schedule } = parseScheduleObj(stringPattern.trim());
		return {
			personName,
			amount: getPaymentAmount(schedule),
			hasError: false,
			isEmptyLine,
			lineNumber: index + 1,
		};
	} catch (error: any) {
		return {
			hasError: true,
			errorMsg: error.toString(),
			isEmptyLine,
			lineNumber: index + 1,
		};
	}
}
