import React from 'react'

export default function Player({name, score, id, incrementScore}) {
    
    const onClickIncrement = () => {
        incrementScore(id);
    }
    
    return (
    <ul>
        <li className="Player">
        <p>
        {name} (score: {score})
        <button onClick={onClickIncrement}>increment</button>
        </p>
        </li>

    </ul>
    )
}