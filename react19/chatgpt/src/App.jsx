import './App.css';
import Comp, { Comp2, Comp3, Comp4 } from './components/Comp';
import Jsx from './components/Jsx';
import State from './components/State';

function App() {
	return (
		<>
			<div className=''>
				<h1>hog wards</h1>
				<p>jsx component</p>
				<Jsx />
				<p>react components</p>
				<Comp />
				<Comp2 text={'component with props'}></Comp2>
				<Comp3>
					<p>component with children</p>
					<h4>the p nd h4 tags: we are component 3 children's.</h4>
				</Comp3>
				<p>conditional component</p>
				<Comp4></Comp4>
				<p>state management</p>
				<p>memorable</p>
				<State></State>
			</div>
		</>
	);
}

export default App;
