import React from 'react'
import './DoctorCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion';
import ParticlesBackground from '../Particles/ParticlesBackground';
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
const DoctorCard = ({ data, index }) => {
    const variants = {
        hidden: {
            y: -10,
            opacity: 0
        },
        visible: {
            transition: {
                delay: 0.7 + (0.1 * index)
            },
            y: 0,
            opacity: 1
        }
    }
    return (
        <motion.div className='doctor-card' variants={variants} initial="hidden" animate="visible">
            <h3 className='doctor-name'>{data.name}</h3>
            <span className="role">{data.role}</span>
            <div className="doctor-icons">
                <a className="linkedin-icon" href={data.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="linkedin-icon" href={data.linkedin}><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </motion.div>
    )
}

export default DoctorCard