import React from 'react'
import Part from './Part'

const Content = (props) => {
    const { parts } = props
    console.log(parts[0])
    console.log(`Map thru this array of objs:`, parts)
	return (
		<div>
			<Part parts={parts} />
		</div>
	)
}

export default Content