import React from 'react'

const Part = ({ parts }) => {
    
    const allParts = parts.map((part) => {
        console.log(part)
    return <p key={part.id}>{part.name} {part.exercises}</p>
    })
     return (allParts)
    // return (
	// 		<ul>
	// 			{parts.map((item) => 
	// 				<li key={item.id}>{item.name} {item.exercises}</li>
	// 			)}
	// 		</ul>
	// 	)
		
}

export default Part