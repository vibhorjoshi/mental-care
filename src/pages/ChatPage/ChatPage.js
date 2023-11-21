import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import questions from './questions'
import songs from './songs'
import axios from 'axios'
import './ChatPage.css'
import ReactScrollableFeed from 'react-scrollable-feed'
import Typing from './../../components/Typing/Typing';
import { motion } from 'framer-motion';
import Player from './../../components/Player/Player';
import ParticlesBackground from './../../components/Particles/ParticlesBackground';
import PlayerList from './../../components/Player/PlayerList/PlayerList';
import { useNavigate } from 'react-router'

const ChatPage = ({ variants, transition }) => {
    const [messages, setMessages] = useState([{ owner: false, text: questions[0].question }])
    const [botTyping, setBotTyping] = useState(false)
    const inputRef = useRef()
    const messagesEndRef = useRef()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [dataToSend, setDataToSend] = useState({})
    const [end, setEnd] = useState(false)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)
    const mappings = {
        never: 1,
        sometimes: 2,
        often: 3,
        always: 4
    }
    const maps = ["never", "often", "sometimes", "always"]
    const chatEnterRef = useRef()
    const navigate = useNavigate()
    const botMessage = async (newMessages, newQuestion) => {
        setBotTyping(true)
        setTimeout(() => {
            setBotTyping(false)
            if (newQuestion < questions.length) {
                setMessages([...newMessages, { owner: false, text: questions[newQuestion].question }])
                setCurrentQuestion(newQuestion)
            }
            else {
                setMessages([...newMessages, { owner: false, text: "Submit and see your results!" }])
                setCurrentQuestion(newQuestion)
            }
        }, 1000)
    }

    useEffect(() => {
        setNextSongIndex((currentSongIndex + 1) % songs.length)
    }, [currentSongIndex])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView()
    }, [messages, botTyping])

    const submitMessage = async (message) => {
        if (message.length === 0) return

        const newDataToSend = dataToSend
        if (maps.includes(message)) {
            newDataToSend[questions[currentQuestion].label] = mappings[message]
        }
        else if (questions[currentQuestion].label === "Gender") {
            if (message === "Male") {
                newDataToSend[questions[currentQuestion].label] = 1
            }
            else {
                newDataToSend[questions[currentQuestion].label] = 2
            }
        }
        else if (questions[currentQuestion].label === "CGPA") {
            const cgpaMaps = {
                "very satisfied": 4,
                "satisfied": 3,
                "moderate": 2,
                "disappointed": 1
            }
            newDataToSend[questions[currentQuestion].label] = cgpaMaps[message]
        }
        else {
            newDataToSend[questions[currentQuestion].label] = parseInt(message)
        }
        setDataToSend(newDataToSend)
        const newMessages = [...messages, { owner: true, text: message }]
        const newQuestion = currentQuestion + 1
        setMessages(newMessages)

        setTimeout(() => { botMessage(newMessages, newQuestion) }, 1000)
    }

    const sendData = async () => {
        setBotTyping(true)
        localStorage.removeItem('responese')
        const { data } = await axios.post('https://mental-health-flask-server.herokuapp.com/predict', dataToSend)
        const dataToSave = { ...dataToSend, ...data }
        localStorage.setItem('response', JSON.stringify(dataToSave))
        setEnd(true)
        navigate('/results')
    }



    return (
        <motion.div
            className='chat-container'
            initial="out"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}>
            <ParticlesBackground />

            <motion.div
                className="music-player-container"
                initial="hidden"
                animate="visible"
            >
                <Player
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    nextSongIndex={nextSongIndex}
                    songs={songs} />
            </motion.div>
            <div className="music-player-list-container">
                <PlayerList
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    nextSongIndex={nextSongIndex}
                    songs={songs} />
            </div>

            <div className="chat-frame-container">
                <div className="chat-frame">
                    <div className="messages-container">
                        {messages.map((msg, index) => {
                            return (
                                <div className={`message-mega-container ${(msg.owner) ? 'owner-container' : ''}`} key={index}>
                                    {!msg.owner && <div className="bot-pic"><img src="./bot.gif" alt="" /></div>}
                                    <div className={`message-container ${(msg.owner) ? 'owner' : ''}`} >
                                        <p className='message-text'>{msg.text}</p>
                                    </div>
                                </div>)
                        })}
                        {botTyping && <div className="message-container">
                            <Typing />
                        </div>}
                        <div ref={messagesEndRef}></div>
                    </div>
                    {currentQuestion < questions.length ? questions[currentQuestion].type === "num" ?
                        <form className="input-container" onSubmit={(e) => {
                            e.preventDefault()
                            submitMessage(inputRef.current.value)
                        }}>
                            <input type={"number"}
                                placeholder={questions[currentQuestion].placeholder}
                                ref={inputRef}
                                required />
                            <button
                                className='send-button'
                                type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
                        </form> :
                        <div className="mcq-container">
                            {questions[currentQuestion].options.map((option, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="option-container"
                                        onClick={() => {
                                            submitMessage(option)
                                        }}
                                    >{option}</span>
                                )
                            })}
                        </div> :
                        (end === false) && <div className="last-question">
                            <div className="mcq-container">
                                <span className='option-container' onClick={sendData}>Submit</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default ChatPage