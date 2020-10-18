import React, { useState } from 'react'
import History from './History'
import Button from './Button'

//for a complex state, use 'useEffect' multiple times to create separate 'pieces' of state. Easiest way is to save click counts of both left and right btns into one obj.

const ComplexState = () => {
	//create 2 pieces of state for apps: left & right

	const [clicks, setClicks] = useState({
		left: 0,
		right: 0,
	})
	const [allClicks, setAll] = useState([])

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'))
		setClicks({ ...clicks, left: clicks.left + 1 })
	}
	const handleRightClick = () => {
		setAll(allClicks.concat('R'))
		setClicks({ ...clicks, right: clicks.right + 1 })
	}
	const handleReset = () => {
		setAll([])
		setClicks({
			left: 0,
			right: 0,
		})
	}

	return (
		<div>
			<div>
				{clicks.left}
				<Button onClick={handleLeftClick} text='Left' />
				<Button onClick={handleReset} text='RESET' />
				<Button onClick={handleRightClick} text='Right' />
				{clicks.right}
				<History allClicks={allClicks} />
			</div>
		</div>
	)
}

export default ComplexState

/**
 * 
	 * { ...clicks }  creates a new obj. that has copies of all the properties of the clicks obj.
	 * we use 'concat' above coz it doesn't mutate existing array, instead returns new copy of the array with the item added to it.
	 * we don't use 'push' (allClicks.push('L) setAll(allClicks)) coz it would mutate the state directly. So we make a copy first

 * When left btn is clicked, the following func is called:
 *  const handleLeftClick = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right
        }
        setClicks(newClicks)
    }
 
 * The following obj is set as the new state of the application
        {
            left: clicks.left + 1,
            right: clicks.right
        }


 * When right btn is clicked, the following func is called:
    const handleRightClick = () => {
			const newClicks = {
				left: clicks.left,
				right: clicks.right + 1,
            }
            setClicks(newClicks)
        }
    
    * The following obj is set as the new state of the application
        {
            left: clicks.left,
            right: clicks.right + 1
		}
	
	 */
