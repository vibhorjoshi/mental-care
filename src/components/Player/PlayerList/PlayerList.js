import React from 'react'
import './PlayerList.css'
const PlayerList = ({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) => {
    return (
        <div className='player-list-container'>
            {songs.map((song, index) => {
                return (
                    <div key={index} className={`player-list-card ${index === currentSongIndex ? "active" : ""}`} onClick={() => { setCurrentSongIndex(index) }}>
                        <h4 className="song-name">{song.name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerList