import React from 'react'
import './Button.css'
const Button = ({ text, click, color }) => {
    return (
        <button className='button' onClick={click} style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

export default Button