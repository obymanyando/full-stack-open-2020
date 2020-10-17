import React, { useState } from 'react'
import Button from './Button'
import Counter from './Counter'
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
		clickCount: 0,
	})

	const [all, setall] = useState({})

	const handleGoodFeedback = () => {
		setClicks({
			...clicks,
			good: clicks.good + 1,
			clickCount: clicks.clickCount + 1,
		})
		// setall(clicks.clickCount)
	}
	const handleNeutralFeedback = () => {
		setClicks({
			...clicks,
			neutral: clicks.neutral + 1,
			clickCount: clicks.clickCount + 1,
		})
		// setall(clicks.clickCount)
	}
	const handleBadFeedback = () => {
		setClicks({
			...clicks,
			bad: clicks.bad + 1,
			clickCount: clicks.clickCount + 1,
		})
		// setall(clicks.clickCount)
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
			<Counter allFeedback={clicks} />
		</div>
	)
}

export default Main
