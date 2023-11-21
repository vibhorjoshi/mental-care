import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css';
import ChatPage from './pages/ChatPage/ChatPage';
import HomePage from './pages/HomePage/HomePage';
import { AnimatePresence, motion } from 'framer-motion'
import Analytics from './pages/Analytics/Analytics';
import { useEffect, useRef } from 'react';
import { curveText } from 'curvetext'
import ArcText from 'arc-text'
import Tips from './pages/Tips/Tips';
import ContactUs from './pages/ContactUs/ContactUs';
import ResultPage from './pages/ResultPage/ResultPage';
import Community from './pages/Community/Community';
import Doctor from './pages/Doctor/Doctor';

function App() {
  const location = useLocation()
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
      rotate: "0deg",
      transition: {
        duration: 0.6
      }

    },
    out: {
      opacity: 0,
      x: "-100%",
      // rotate: "200deg",
      transition: {
        duration: 0.6
      }
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "linear"
  }


  return (
    // <BrowserRouter>
    <div className="container">
      <header className='header'>
        <span className="logo"><Link to="/" style={{ textDecoration: "none" }}>HAPPIFY</Link></span>
        <ul className="navbar">
          <li className="navbar-item"><Link to={"/"}>Home</Link></li>
          <li className="navbar-item"><Link to={"/community"}>Community</Link></li>
          {/* <li className="navbar-item"><Link to={"/contactus"}>About Us</Link></li> */}
        </ul>
      </header>
      <div className="grid-container">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage variants={pageVariants} />} />
            <Route path='/test' element={<ChatPage variants={pageVariants} transition={pageTransition} />} />
            <Route path='/tips' element={<Tips variants={pageVariants} transition={pageTransition} />} />
            <Route path='/results' element={<ResultPage variants={pageVariants} transition={pageTransition} />} />
            <Route path='/analytics' element={<Analytics variants={pageVariants} transition={pageTransition} />} />
            {/* <Route path='/contactus' element={<ContactUs variants={pageVariants} transition={pageTransition} />} /> */}
            <Route path='/community' element={<Community variants={pageVariants} transition={pageTransition} />} />
            <Route path='/doctor' element={<Doctor variants={pageVariants} transition={pageTransition} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
    // </BrowserRouter>

  );
}

export default App;
