import { useReducer } from 'react';
import './App.css';
import { GithubIcon } from './components/icons/github';
import { calcReducer, initialState } from './components/reducer';
import { ResultList } from './components/ResultList';
import { LineCounter, TextEditor } from './components/TextEditor';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}


/**
 * Dummy Header component
 */
function Header() {
	return (
		<header className="App-header flex-row-center">
			<h3>Salary Calculator</h3>
			<a
				className="github-icon-link"
				href="https://github.com/mibmol/exercise1"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GithubIcon className="github-icon" />
			</a>
		</header>
	);
}

/**
 * Main component that hold the state and provide the 
 * dispatcher to children components via useReducer
 * Reducer logic can be found in components/reducer.ts
 */
function Main() {
	const [state, dispatch] = useReducer(calcReducer, initialState);
	return (
		<main className="flex-row" style={{ marginLeft: '10%' }}>
			<div>
				<h3 style={{ textAlign: 'start', color: '#475569' }}>
					Enter the list of work schedules:
				</h3>
				<div className="editor-wrapper">
					<LineCounter results={state.results} />
					<TextEditor dispatch={dispatch} />
				</div>
			</div>
			<ResultList results={state.results} />
		</main>
	);
}

function Footer() {
	return (
		<footer style={{}}>
			<p style={{ color: '#64748B' }}>
				© {new Date().getFullYear()} Miguel Patiño San-yeng
			</p>
		</footer>
	);
}

export default App;
