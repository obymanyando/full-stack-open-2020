import React, { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'
import Display from './Display'
import Anecdotes from './Anecdotes';

const style = {
	green: { backgroundColor: 'green' },
	orange: { backgroundColor: 'orange' },
	red: { backgroundColor: 'red' },
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const Main = () => {
	const [clicks, setClicks] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
		clickCount: 0,
	})

	const [all, setall] = useState({})
	const [selected, setSelected] = useState(0)

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
	const handleAnecdotes = () => {

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

			<Display
				text='Good'
				good={clicks.good}
				text='Neutral'
				neutral={clicks.neutral}
				text='Bad' bad={clicks.bad}
			/>
			<Statistics allFeedback={clicks} />
			<Anecdotes anecdotes={anecdotes}/>
		</div>
	)
}

export default Main
