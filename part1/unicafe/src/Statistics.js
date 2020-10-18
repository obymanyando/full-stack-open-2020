import React from 'react'

const Statistics = ({ allFeedback }) => {
	
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
			<table>
				<thead>
					<tr>
						<th>All Feedback</th>
						<td>{sum}</td>
					</tr>
					<tr>
						<th>Average</th>
						<td>{avg.toFixed(2)}</td>
					</tr>
					<tr>
						<th>Positive</th>
						<td>{positive.toFixed(2)}</td>
					</tr>
				</thead>
			</table>
		</div>
	)
}

export default Statistics
