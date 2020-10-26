import React from 'react'

const Total = ({ parts }) => {
    console.log(parts)
    const sum = parts.reduce((s, p) => {
        console.log('What is:', s, p)
        return s + p.exercises
    }, 0)
    return <p style={{ color: 'green', fontWeight: 700 }}>Total exercises: {sum}</p>
    
}

export default Total
