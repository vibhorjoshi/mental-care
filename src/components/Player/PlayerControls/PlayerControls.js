import React from 'react'
import './PlayerControls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
const PlayerControls = ({ isPlaying, setIsPlaying, skipSong }) => {
    return (
        <div className='player-control-container'>
            <button className="skip-btn" onClick={() => { skipSong(false) }}><FontAwesomeIcon icon={faBackward} /></button>
            <button className="play-btn" onClick={() => { setIsPlaying(!isPlaying) }}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => { skipSong(true) }}><FontAwesomeIcon icon={faForward} /></button>
        </div>
    )
}

export default PlayerControls