import React from 'react'
import './TipCard.css'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
const TipCard = ({ text, index }) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            transition: {
                delay: 0.7 * index
            },
            x: 0,
            opacity: 1
        }
    }
    return (
        <motion.div className='tipcard-container' variants={cardVariants} initial="hidden" animate="visible">
            {text}
            <div className="tip-bulb" style={{ animationDelay: `${0.7 * index}s` }}><FontAwesomeIcon icon={faLightbulb} /></div>
        </motion.div>
    )
}

export default TipCard