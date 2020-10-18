import React from 'react'

const Button = ({ onClick, text, style }) => {
	return (
		<div>
			<button style={style} onClick={onClick}>
				{text}
			</button>
		</div>
	)
}

export default Button
