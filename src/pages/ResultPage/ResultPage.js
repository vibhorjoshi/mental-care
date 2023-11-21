import React, { useEffect, useState } from 'react'
import './ResultPage.css'
import ParticlesBackground from './../../components/Particles/ParticlesBackground';
import { motion } from 'framer-motion';
import ProgressCard from './../../components/ProgressCard/ProgressCard';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const ResultPage = ({ variants, transition }) => {
  const navigate = useNavigate()
  const [max, setMax] = useState(0)
  const scores = [
    JSON.parse(localStorage.getItem('response'))['healthy'].toFixed(2) * 100,
    JSON.parse(localStorage.getItem('response'))['stressed'].toFixed(2) * 100,
    JSON.parse(localStorage.getItem('response'))['critical'].toFixed(2) * 100
  ]
  const max_mappings = ["healthy", "stressed", "critical"]
  const colors = ["greenyellow", 'orange', 'red']

  useEffect(() => {
    if (!localStorage.getItem('response')) {
      return navigate('/test')
    }
    const max_val = Math.max(...scores)
    const index = scores.indexOf(max_val)
    setMax(index)

  }, [navigate])

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
      className='results-container'>
      <ParticlesBackground />
      <h2 className="results-heading">Your Results</h2>
      <h3 className="results-tagline">As per your responses, your emotional wellness score lies in the <span>{max_mappings[max]}</span> range</h3>
      <div className="scores-container">
        <ProgressCard
          heading={max_mappings[(max + 1) % 3]}
          color={colors[(max + 1) % 3]}
          score={scores[(max + 1) % 3]}
          max={false}
        />
        <ProgressCard
          heading={max_mappings[max]}
          color={colors[max]}
          score={scores[max]}
          max={true}

        />
        <ProgressCard
          heading={max_mappings[(max + 2) % 3]}
          color={colors[(max + 2) % 3]}
          score={scores[(max + 2) % 3]}
          max={false}
        />
      </div>
      <Link to="/analytics" style={{ color: "white", textDecoration: "none" }}>
        <div className="analytics-btn">
          <p>Analytics</p>
          <span><FontAwesomeIcon icon={faPlay} /></span>
        </div>
      </Link>
      <Link to="/tips" style={{ color: "white", textDecoration: "none" }}>
        <div className="tips-btn">
          <p>Tips</p>
          <span><FontAwesomeIcon icon={faPlay} /></span>
        </div>
      </Link>

    </motion.div>
  )
}

export default ResultPage