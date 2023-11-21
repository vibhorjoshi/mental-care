import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom';
import Button from './../../components/Button/Button';
import ParticlesBackground from '../../components/Particles/ParticlesBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
const HomePage = ({ variants, transition }) => {


    const buttonVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const innerButtonVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}
            className='homepage-container-background'>
            <ParticlesBackground />
            <h2 className="eureka">EUREKA</h2>
            <div className="ball">.</div>
            <div className="line"></div>

            <div className='homepage-container'>
                <h1 className="heading-main">
                    "HAPPINESS CAN BE FOUND EVEN IN THE DARKEST OF TIMES, IF ONE ONLY REMEMBERS TO TURN ON THE LIGHT"
                    <span className='bulb'><FontAwesomeIcon icon={faLightbulb} /></span>
                </h1>
                <motion.div
                    className="buttons"
                    variants={buttonVariants}
                    animate="visible"
                    initial="hidden">
                    <motion.div
                        variants={innerButtonVariants}
                    ><Link to={"test"}><Button text="Self Test" click={null} color={"#1c8017"} /></Link></motion.div>
                    <motion.div
                        variants={innerButtonVariants}
                    >
                        <a href='https://github.com/anmolwadhwaxx/happify-analytics/blob/main/Google_Form_Analytics.ipynb' target="_blank">
                            <Button text="Analytics" click={null} color={"#94a71d"} />
                        </a>
                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    )
}

export default HomePage