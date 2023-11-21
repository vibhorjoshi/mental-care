import React from 'react'
import './Doctor.css'
import doctors from './DoctorData';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/Particles/ParticlesBackground';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
const Doctor = ({ variants, transition }) => {
    
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}
            className='doctor-container'>
            <ParticlesBackground density={40} />
            <h2 className="doctor-heading">Doctors</h2>
            <div className="doctor-cards">
                {doctors.map((member, index) => {
                    return (
                        <DoctorCard data={member} key={index} index={index} />
                    )

                })}
            </div>
        </motion.div>
    )
}

export default Doctor