import React from 'react'
import Content from './Content';
import Header from './Header'
import Total from './Total'

const Course = ({ course }) => {
	
	console.log(course)
	
    return (
			<div>
				<Header name={course.name} />

				<Content parts={course.parts} />
				
				<Total parts={course.parts} />
				<hr />
			</div>
		)
}

export default Course

// {
// 	;`${course.parts[0].name} ${course.parts[0].exercises}`
// }
// ;<p>
// 	{course.parts[0].name}
// 	{course.parts[0].exercises}
// </p>

