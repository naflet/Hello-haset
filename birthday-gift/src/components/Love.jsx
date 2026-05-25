import React from "react";
import "../styles/love.css";

export default function Love() {
  return (
    <section className="scene">

      {/* Floating hearts */}
      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💘</span>
        <span>❤️</span>
        <span>💞</span>
      </div>

      {/* Glow rings */}
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>

      {/* Main content */}
      <div className="love-container">

        <h1 className="love-text">
          LOVE
        </h1>

        <div className="heart">
          ❤️
        </div>

        <p className="message">
          You are my heart, my happiness,
          and my forever love 💕
        </p>

        <button className="love-btn">
          Forever Together 💖
        </button>

      </div>

    </section>
  );
}