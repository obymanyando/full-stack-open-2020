import React from 'react'
import Part from './Part'

const Content = (props) => {
	console.log(props)
	return (
		<>
			{/* <Part
				part1={props.parts[0].name}
				exercises1={props.parts[0].exercises1}
				part2={props.parts[0].name}
				exercises2={props.parts[1].exercises2}
				part3={props.parts[2].name}
				exercises3={props.parts[2].exercises3}
			/> */}
			<Part
				part1={props.parts[0].name}
				exercises1={props.parts[0].exercises1}
			/>
			<hr />
			<Part
				part2={props.parts[0].name}
				exercises2={props.parts[1].exercises2}
			/>
			<hr />
			<Part
				part3={props.parts[2].name}
				exercises3={props.parts[2].exercises3}
			/>
			<hr />
		</>
	)
}

export default Content
