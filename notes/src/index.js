import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ComplexState from './ComplexState'

ReactDOM.render(
	<React.StrictMode>
		<App />
		<hr />
		<ComplexState />
	</React.StrictMode>,
	document.getElementById('root'),
)
