import { useState } from 'react';
import '../styles/hero.css';

import profile from '../assets/images/image.png';

import img1 from '../assets/images/image1.png';
import img2 from '../assets/images/image2.png';
import img3 from '../assets/images/image3.png';
import img4 from '../assets/images/image4.png';
import img5 from '../assets/images/image5.png';

function Hero({ onOpenLetter }) {
  const [selectedGift, setSelectedGift] = useState(null);

  const gifts = [
    { img: img1, text: "You are my happiness ❤️" },
    { img: img2, text: "Every moment with you is special ✨" },
    { img: img3, text: "You are my dream 💖" },
    { img: img4, text: "I love your smile 🌸" },
    { img: img5, text: "Forever mine 💍" },
  ];

  return (
    <section className="hero">

      {/* 🌸 FLOWER DECORATION (ONLY ADDITION) */}
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

      {/* 💖 HERO CONTENT (UNCHANGED STRUCTURE) */}
      <div className="hero-content">

        <img
          src={profile}
          alt="profile"
          className="hero-img"
        />

        <h1>Happy Birthday My Love ❤️</h1>

        <p>You are the most beautiful part of my life</p>

        <button className="hero-btn" onClick={onOpenLetter}>
          💖 Open Surprise
        </button>

      </div>

      {/* 🎁 GIFTS (ONLY ADDITION) */}
     <div className="gift-container">

  {gifts.map((gift, index) => (
    <div
      key={index}
      className={`gift gift-${index + 1}`}
      onClick={() => setSelectedGift(gift)}
    >
      <div className="gift-icon">🎁</div>
      <span className="gift-label">Open me</span>
    </div>
  ))}

</div>

      {/* 📦 GIFT MODAL */}
      {selectedGift && (
        <div className="gift-modal" onClick={() => setSelectedGift(null)}>
          <div className="gift-box" onClick={(e) => e.stopPropagation()}>

            <img src={selectedGift.img} alt="gift" />

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