import React, { useEffect, useRef, useState } from 'react'
import './Player.css'
import PlayerControls from './PlayerControls/PlayerControls';
const Player = ({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) => {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        audioEl.current.volume = 0.2
        if (isPlaying) audioEl.current.play()
        else audioEl.current.pause()
    })


    const skipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex((currentSongIndex + 1) % songs.length)
        }
        else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp--
                if (temp < 0) return songs.length - 1
                else return temp
            })
        }
    }
    useEffect(() => {
        audioEl.current.addEventListener('ended', () => {
            skipSong(true)
        })
    })

    return (
        <div className='player-container'>
            <audio ref={audioEl} src={songs[currentSongIndex].src}></audio>
            <h4>Playing Now:</h4>
            <p className="song-name">{songs[currentSongIndex].name}</p>
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} />
        </div>
    )
}

export default Player