import React from 'react'

const Total = (props) => {
	return (
		<div>
			<h3>Total number of exercises: {props.total[0].exercises1 + props.total[1].exercises2 + props.total[2].exercises3}</h3>
			<hr />
			
		</div>
	)
}

export default Total