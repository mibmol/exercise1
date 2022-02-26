import { Result } from 'components/types';
import { render, screen } from '@testing-library/react';
import { ResultItem } from 'components/ResultList';

describe('Test ResultItem component', () => {
	it('should render a ResultItem with and error message', () => {
		let errorResult: Result = {
			errorMsg: 'Error Invalid Format',
			hasError: true,
			isEmptyLine: false,
			lineNumber: 2,
		};
		render(<ResultItem result={errorResult} />);
		expect(screen.getByText('Error Invalid Format at Line 2')).toBeInTheDocument();
	});

	it('should render a ResultItem with Calculated Results', () => {
		let result: Result = {
			hasError: false,
			isEmptyLine: false,
			lineNumber: 2,
			personName: 'Rodrigo',
			amount: 2010,
		};
		render(<ResultItem result={result} />);
		expect(screen.getByText(`${result.personName}:`)).toBeInTheDocument();
		expect(screen.getByText(`\$${result.amount}`)).toBeInTheDocument();
	});
});
