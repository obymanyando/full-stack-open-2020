import React from 'react'

const Part = (props) => {
	console.log(props)
	return (
		<div>
			<h3>Part1: {props.parts}</h3>
			<p>Exercises1 = {props.exercises1}</p>

			<h3>Part2: {props.parts}</h3>
			<p>Exercises2 = {props.exercises2}</p>

			<h3>Part3: {props.parts}</h3>
			<p>Exercises3 = {props.exercises3}</p>
		</div>
	)
}

export default Part
