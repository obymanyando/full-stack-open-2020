import React from 'react'

const Counter = ({ allFeedback }) => {
	
	const sum = allFeedback.good + allFeedback.neutral + allFeedback.bad
	const avgSum = allFeedback.good - allFeedback.bad
	const positive = ((allFeedback.good/sum) * 100)

	const avg = avgSum / allFeedback.clickCount
	
	 if (sum === 0) {
		return (
			<div>
				<h3>All Feedback: No feedback given yet.</h3>
			</div>
		)
		}
	return (
		<div>
			<h3>All Feedback: {sum} </h3>
			<h3>Average: {avg.toFixed(2)}</h3>
			<h3>Positive: {positive.toFixed(2)}% </h3>
		</div>
	)
}

export default Counter
