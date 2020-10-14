import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

const style = {
	green: { backgroundColor: 'green' },
	orange: { backgroundColor: 'orange' },
	red: { backgroundColor: 'red' },
}

const Main = () => {
	const [clicks, setClicks] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	})

	const handleGoodFeedback = () => {
		setClicks({ ...clicks, good: clicks.good + 1 })
	}
	const handleNeutralFeedback = () => {
		setClicks({ ...clicks, neutral: clicks.neutral + 1 })
	}
	const handleBadFeedback = () => {
		setClicks({ ...clicks, bad: clicks.bad + 1 })
	}

	return (
		<div className='main'>
			<h1>Please give us feedback:</h1>
			<div className='btnProps'>
				<Button
					onClick={handleGoodFeedback}
					text='Good'
					style={style.green}></Button>
				<Button
					onClick={handleNeutralFeedback}
					text='Neutral'
					style={style.orange}></Button>
				<Button
					onClick={handleBadFeedback}
					text='Bad'
					style={style.red}></Button>
			</div>

			<Display good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
		</div>
	)
}

export default Main
