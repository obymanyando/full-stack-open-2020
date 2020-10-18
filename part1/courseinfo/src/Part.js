import React from 'react'

const Part = (props) => {
	console.log(props.part1)
	
	return (
		<div>
			<h3>Part1: {props.part1}</h3>
			<p>Exercises1 = {props.exercises1}</p>

			<h3>Part2: {props.part2}</h3>
			<p>Exercises2 = {props.exercises2}</p>

			<h3>Part3: {props.part3}</h3>
			<p>Exercises3 = {props.exercises3}</p>
		</div>
	)
}

export default Part
