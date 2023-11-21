import React from 'react'
import './Community.css'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ParticlesBackground from './../../components/Particles/ParticlesBackground';
const Community = ({ variants, transition }) => {
    return (
        <>
            <ParticlesBackground />
            <motion.div
                className='community-container'
                initial="out"
                animate="in"
                exit="out"
                variants={variants}
                transition={transition}>
                <h2 className='community-heading'>Join our community!</h2>
                <a href="https://chat.whatsapp.com/K56VZZq62a11nFjhFjLTlx" target="_blank" style={{ textDecoration: "none", color: "white" }}>
                    <div className="whatsapp-container">
                        <h4 className="whatsapp-heading">Whatsapp Group</h4>
                        <span className="icon"><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 25 }} /></span>
                    </div>
                </a>
                <h3 className='tagline'>Since the dawn of human civilization, humans have been known to be part of communities. Happify is a community where we help people, support each other and grow together. Feel Free To Express what's on your mind here and be free from the fear of judgment.</h3>
                

            </motion.div>
        </>
    )
}

export default Community