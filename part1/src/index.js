import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'
import HelloApp from './HelloApp'
import CounterApp from './CounterApp'

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
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
	}
	

	return (
		<div className='app'>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total total={course.parts} />
		</div>
	)
}

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <HelloApp /> */}
		<CounterApp />
	</React.StrictMode>,
	document.getElementById('root'),
)
