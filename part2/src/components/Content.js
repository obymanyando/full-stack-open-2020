import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
	console.log(`Map thru this array of objs:`, parts)
	const allParts = parts.map((part) => {
		return <Part key={part.id} name={part.name} exercises={part.exercises}/>
	})
	return allParts
}

export default Content

