import React, { useState } from 'react'
import Display from './Display'
import Button1 from './Button1'

const App = () => {
	const [counter, setCounter] = useState(0)

	const increase = () => setCounter(counter + 1)
	const decrease = () => setCounter(counter - 1)
	const reset = () => setCounter(0)

	// setTimeout(() => setCounter(counter + 1), 1000)

	return (
		<div className='App'>
			<Display counter={counter} />
			<Button1 handleClick={decrease} text='Minus One' />
			<Button1 handleClick={reset} text='Reset' />
			<Button1 handleClick={increase} text='Plus One' />
		</div>
	)
}

export default App
