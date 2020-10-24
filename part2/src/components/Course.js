import React from 'react'
import Content from './Content';
import Header from './Header'

const Course = ({ course }) => {

    return (
			<div>
				<Header course={course} />
                <Content parts={course.parts}/>
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

