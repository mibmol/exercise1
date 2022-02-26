import { FC } from 'react';
import { Result } from './types';

type ResultListProps = {
	results: Result[];
};
export const ResultList: FC<ResultListProps> = ({ results }) => {
	return (
		<div
			style={{
				paddingTop: '8px',
				paddingBottom: '8px',
			}}
		>
			<h3 style={{ color: '#475569' }}>Results:</h3>
			<ul
				style={{
					width: '256px',
					paddingRight: '4px',
					overflow: 'auto',
					height: '70vh',
				}}
			>
				{results
					.filter((r) => !r.isEmptyLine)
					.map((result) => (
						<ResultItem
							key={`${result.personName}${result.lineNumber}`}
							result={result}
						/>
					))}
			</ul>
		</div>
	);
};

type ResultItemProps = {
	result: Result;
};
export const ResultItem: FC<ResultItemProps> = ({ result }) => {
	return (
		<li className="flex-row-between">
			{result.hasError ? (
				<p className="mr-2 my-0" style={{ color: '#E11D48' }}>
					{result.errorMsg} at Line {result.lineNumber}
				</p>
			) : (
				<>
					<p className="mr-2 my-0" style={{ color: '#475569', fontWeight: 500 }}>
						{result.personName}:
					</p>
					<b style={{ color: '#059669' }}>${result.amount}</b>
				</>
			)}
		</li>
	);
};
