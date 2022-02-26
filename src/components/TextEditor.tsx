import { Dispatch, FC, useEffect, useRef } from 'react';
import { CalcActions } from './reducer';
import { Result } from './types';
import './TextEditor.css';

type TextEditorProps = {
	dispatch: Dispatch<any>;
};
export const TextEditor: FC<TextEditorProps> = ({ dispatch }) => {
	const inputRef = useRef(null);

	useEffect(() => {
		calculate();
	}, []);

	function calculate() {
		dispatch({
			type: CalcActions.calculateResults,
			value: (inputRef.current as any).innerHTML ?? '',
		});
	}

	return (
		<div ref={inputRef} onInput={calculate} className="editor" contentEditable>
			<div>
				RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
			</div>
			<div>ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00</div>
			<div>JUAN=zxcvzxcv</div>
		</div>
	);
};

type LineCounterProps = {
	results: Result[];
};
export const LineCounter: FC<LineCounterProps> = ({ results }) => {
	return (
		<ul className="counter">
			{results.length === 0 && (
				<li key={-1}>
					<div></div>
					<span>{1}</span>
				</li>
			)}
			{results.map(({ hasError, isEmptyLine }, index) => (
				<li className="flex-row" key={index}>
					<div className="flex-row-center">
						{hasError && !isEmptyLine ? <div className="error-badge"></div> : <></>}
					</div>
					<span style={{ color: '#64748B' }}>{index + 1}</span>
				</li>
			))}
		</ul>
	);
};
