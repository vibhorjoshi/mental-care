import React from 'react'
import TipCard from '../../components/TipCard/TipCard'
import './Tips.css'
import tips from './tipsData'
import { motion } from 'framer-motion';
import ParticlesBackground from './../../components/Particles/ParticlesBackground';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const Tips = ({ variants, transition }) => {


    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}
            className='tips-mega-container'>
            <div className="yoga-container">
                <ParticlesBackground density={100} />
                <img src={"./images/svgs/yoga.svg"} alt="" />
            </div>
            <div className="tips-container">
                {tips.map((tip, index) => {
                    return (
                        <TipCard key={index} text={tip} index={index} />
                    )
                })}
            </div>
            <div className="link-buttons">
                <Link to="/doctor" style={{ color: "white", textDecoration: "none" }}>
                    <div className="doctors-btn">
                        <p>Doctors</p>
                        <span><FontAwesomeIcon icon={faPlay} /></span>
                    </div>
                </Link>
                <Link to="/community" style={{ color: "white", textDecoration: "none" }}>
                    <div className="community-btn">
                        <p>Community</p>
                        <span><FontAwesomeIcon icon={faPlay} /></span>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}

export default Tips