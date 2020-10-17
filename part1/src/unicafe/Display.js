import React from 'react'

const Display = (props) => {
	const { good, neutral, bad , text} = props

	return (
		<div className='stats'>
			<h1>STATISTICS</h1>
			<h3 style={{ color: 'green' }}>
				{text}: {good}
			</h3>
			<h3 style={{ color: 'orange' }}>
				{text}: {neutral}
			</h3>
			<h3 style={{ color: 'red' }}>
				{text}: {bad}{' '}
			</h3>
		</div>
	)
}

export default Display
