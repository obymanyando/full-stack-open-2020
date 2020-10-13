import React from 'react'

const History = (props) => {
	if (props.allClicks.length === 0) {
		return (
			<div>
				<h3>Please start the app by clicking a button above.</h3>
			</div>
		)
	}

	return (
		<div>
			<h3>Button click history: {props.allClicks.join(' - ')}</h3>
		</div>
	)
}

export default History
