import { useState } from 'react';
import '../styles/music.css';

/* 🎵 IMPORT LOCAL AUDIO */
import song1 from '../assets/audio/song1.mp3';
import song2 from '../assets/audio/song2.mp3';

function MusicPlayer() {

  const songs = [
    song1,
    song2,
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="music">

      <div className="music-card">

        <h2>Our Songs 🎶</h2>

        <audio
          controls
          src={songs[current]}
          className="audio"
        />

        <div className="controls">

          <button onClick={() => setCurrent(0)}>
            🎵 Song 1
          </button>

          <button onClick={() => setCurrent(1)}>
            🎶 Song 2
          </button>

        </div>

      </div>

    </section>
  );
}

export default MusicPlayer;