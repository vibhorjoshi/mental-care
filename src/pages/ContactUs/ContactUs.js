import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import './ContactUs.css'
import { motion } from 'framer-motion';
const ContactUs = ({ variants, transition }) => {
    const team = [

        {
            name: "Shatakshi Verma",
            email: "shatakshiverma388@gmail.com",
            role: "ML engineer",
            github: "https://github.com/Shatakshi-verma",
            linkedin: "https://www.linkedin.com/in/shatakshi-verma-708426200/"
        },
        {
            name: "Akshita Goel",
            email: "akshitagoel40@gmail.com",
            role: "frontend/backend developer",
            github: "https://github.com/Akshita2110",
            linkedin: "https://www.linkedin.com/in/akshita-goel-98aa111ba"
        },
        {
            name: "Lakshit Jain",
            email: "lakshitjainprof@gmail.com",
            role: "frontend/backend developer",
            github: "http://github.com/ayuush13",
            linkedin: "https://www.linkedin.com/mwlite/in/ayush-mishra-7137051b4"
        },
        {
            name: "Anmol Wadhwa",
            email: "anmol.wri@gmail.com",
            role: "website designer",
            github: "https://github.com/anmolwadhwaxx",
            linkedin: "https://www.linkedin.com/in/anmol-wadhwa/"
        },

    ]
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}
            className='profile-container'>
            <h2 className="profile-heading">Meet Our Team</h2>
            <div className="profile-cards">
                {team.map((member, index) => {
                    return (
                        <ProfileCard data={member} key={index} index={index} />
                    )

                })}
            </div>
        </motion.div>
    )
}

export default ContactUs
