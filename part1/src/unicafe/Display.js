import React from 'react'

const Display = (props) => {
	const { good, neutral, bad } = props

	return (
		<div className='stats'>
			<h1>STATISTICS</h1>
			<h3 style={{ color: 'green' }}>Good: {good}</h3>
			<h3 style={{ color: 'orange' }}>Neutral: {neutral}</h3>
			<h3 style={{ color: 'red' }}>Bad: {bad} </h3>
		</div>
	)
}

export default Display
