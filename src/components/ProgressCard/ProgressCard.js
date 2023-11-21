import React, { useEffect } from 'react'
import { useState } from 'react'
import './ProgressCard.css'
import { keyframes } from 'styled-components'
import { useRef } from 'react'
const ProgressCard = ({ heading, score, color, max }) => {

    const circleRef = useRef()
    const borderRef = useRef()
    useEffect(() => {
        circleRef.current.style.setProperty('--score', ((440 / 100) * (100 - score)))
        borderRef.current.style.setProperty('--borderColor', (max) ? "white" : "rgba(255, 255, 255, 0.373)")
    }, [score, max])
    const emojis = {
        "healthy": "😊",
        "stressed": (score < 70) ? "😣" : "😫",
        "critical": "😥"

    }
    const size_styles = {
        width: (max) ? "300px" : "280px",
        height: (max) ? "450px" : "400px"
    }

    return (
        <div className={`progress-card-container ${max ? "" : "hide"}`} style={size_styles} ref={borderRef} >
            <div className="box">
                <div className="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"
                            stroke="url(#linear)" stroke-width="4" fill="white"
                            stroke-dasharray="315" stroke-dashoffset="100"
                            ref={circleRef}
                        ></circle>
                    </svg>
                    <div className="dot"
                        style={{ color: (heading === "stressed" && score < 70) ? "yellow" : color }}
                    >.</div>
                    <div className="number">
                        <h2>{Math.round(score)}<span>%</span></h2>
                    </div>
                </div>
                <h2 className="text">{(heading === "stressed" ? (score < 70) ? "stressed" : "highly stressed" : heading)}</h2>
            </div>
            <div className="comparison-container">
                <div className="range-container">
                    <span className='range'>{emojis[heading]}</span>
                </div>
            </div>
        </div>
    )
}

export default ProgressCard