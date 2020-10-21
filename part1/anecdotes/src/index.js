import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const votesArr = Array(anecdotes.length).fill(0)
	const [votes, setVotes] = useState(votesArr)
	console.log(selected)
	console.log(votes)

	const getRandom = () => {
		const randomNum = [Math.floor(Math.random() * anecdotes.length)]

		setSelected(randomNum)
	}

	const getVotes = () => {
		let newVotes = [...votes]
		newVotes[selected] += 1
		setVotes(newVotes)
	}

	let mostVotes = Math.max(...votes)
	let mostVoteIndex = votes.indexOf(mostVotes)

	return (
		<div className='App'>
			<h1 style={{ backgroundColor: '#7491ab' }}>Today's anecdotes.</h1>
			<p>{anecdotes[selected]}</p>
			<p>Anectode has {votes[selected]} votes.</p>

			<button onClick={() => getRandom()}>Next anecdote</button>
			<button onClick={() => getVotes()}>Vote</button>
			<div>
				<h3 style={{ backgroundColor: '#7491ab', padding: 5 }}>
					Most Voted Anecdote
				</h3>
				<p>{anecdotes[mostVoteIndex]}</p>
				<p>It has {votes[mostVoteIndex]} votes.</p>
			</div>
		</div>
	)
}
const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(
	<React.StrictMode>
		<App anecdotes={anecdotes} />
	</React.StrictMode>,
	document.getElementById('root'),
)
