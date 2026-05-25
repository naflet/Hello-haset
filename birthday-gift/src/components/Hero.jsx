import { useState } from 'react';

import '../styles/hero.css';

import profile from '../assets/images/image.png';

/* 🎥 IMPORT VIDEOS */
import love1 from '../assets/videos/love1.mp4';
import love2 from '../assets/videos/love2.mp4';
import love3 from '../assets/videos/love3.mp4';
import love4 from '../assets/videos/love4.mp4';
import love5 from '../assets/videos/love5.mp4';

function Hero({ onOpenLetter }) {

  const [selectedGift, setSelectedGift] = useState(null);

  const gifts = [
    {
      video: love1,
      text: "You are my happiness ❤️"
    },

    {
      video: love2,
      text: "Every moment with you is special ✨"
    },

    {
      video: love3,
      text: "You are my dream 💖"
    },

    {
      video: love4,
      text: "I love your smile 🌸"
    },

    {
      video: love5,
      text: "Forever mine 💍"
    },
  ];

  return (
    <section className="hero">

      {/* 🌸 FLOWER DECORATION */}
      <div className="decor">
        <span>🌸</span>
        <span>💖</span>
        <span>🌼</span>
        <span>✨</span>
        <span>🌷</span>
        <span>💐</span>
        <span>🌸</span>
        <span>💖</span>
      </div>

      {/* 💖 HERO CONTENT */}
      <div className="hero-content">

        <img
          src={profile}
          alt="profile"
          className="hero-img"
        />

        <h1>Happy Birthday My Love ❤️</h1>

        <p>
          You are the most beautiful part of my life
        </p>

        <button
          className="hero-btn"
          onClick={onOpenLetter}
        >
          💖 Open Surprise
        </button>

      </div>

      {/* 🎁 GIFTS */}
      <div className="gift-container">

        {gifts.map((gift, index) => (

          <div
            key={index}
            className={`gift gift-${index + 1}`}
            onClick={() => setSelectedGift(gift)}
          >

            <div className="gift-icon">
              🎁
            </div>

            <span className="gift-label">
              Open me
            </span>

          </div>

        ))}

      </div>

      {/* 📦 GIFT MODAL */}
      {selectedGift && (

        <div
          className="gift-modal"
          onClick={() => setSelectedGift(null)}
        >

          <div
            className="gift-box"
            onClick={(e) => e.stopPropagation()}
          >

            {/* 🎥 VIDEO */}
            <video
              className="gift-video"
              src={selectedGift.video}
              autoPlay
              loop
              controls
            />

            <p>{selectedGift.text}</p>

            <button onClick={() => setSelectedGift(null)}>
              Close
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Hero;