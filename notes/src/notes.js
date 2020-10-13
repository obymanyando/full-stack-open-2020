/**
 * Hooks rules
	You should not mutate state directly. State can only be called inside a function. i.e:
	const handleReset = () => {
		setAll([])
		setClicks({
			left: 0,
			right: 0,
		})
	}
	or call a function directly in the attribute. But this is not smart:
	<button onClick={() => setValue(0)}></button>
 */

/**
 * Function that returns function
 * 
 * Option 1:
 * define event handlers that set the state of the component to a given value
 * const App = (props) => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}
* When the component is rendered, the thousand button is created:

<button onClick={setToValue(1000)}>thousand</button>
The event handler is set to the return value of setToValue(1000) which is the following function:

() => {
  setValue(1000)
}

* Option 2:
* const App = (props) => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}
We can now define the event handler as a function that calls the setToValue function with an appropriate parameter. The event handler for resetting the application state would be:

<button onClick={() => setToValue(0)}>reset</button>
*/
