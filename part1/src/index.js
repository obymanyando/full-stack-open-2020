import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
	const course = 'Half Stack application development'
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises1: 10,
		},
		{
			name: 'Using props to pass data',
			exercises2: 7,
		},
		{
			name: 'State of a component',
			exercises3: 14,
		},
	]

	return (
		<div className='app'>
			<Header course={course} />
			<Content parts={parts} />
			{/* <Total total={part1} /> */}
		</div>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)
