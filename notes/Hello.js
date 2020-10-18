import React from 'react'

const Hello = ({ name, age }) => {
	//destructuring above asigns the values of the properties directly into vari
	// const { name, age } = props
	// const name = props.name
	// const age = props.age
	const bornYear = () => new Date().getFullYear() - age
	return (
		<div>
			<p>
				Hello {name}. You are {age}. That means you were probably born in{' '}
				{bornYear()}.
			</p>
		</div>
	)
}

export default Hello
