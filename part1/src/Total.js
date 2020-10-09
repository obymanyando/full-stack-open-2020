import React from 'react'

const Total = (props) => {
    console.log(props)
	return (
		<div>
			<p>Total number of exercises: {props.total[0].exercises1 + props.total[1].exercises2 + props.total[2].exercises3}</p>
			
		</div>
	)
}

export default Total