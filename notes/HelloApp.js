import React from 'react'
import Hello from './Hello'

const HelloApp = () => {
	const name = 'Oby'
	const age = 36

	return (
		<div>
			<h1>GREETINGS!</h1>
			<Hello name='John' age={20 + 10} />
			<Hello name={name} age={age} />
		</div>
	)
}

export default HelloApp
