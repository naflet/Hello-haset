import '../styles/letter.css';

/* 🎥 IMPORT YOUR VIDEO */
import loveVideo from '../assets/videos/love.mp4';

function LoveLetterModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* 🎥 VIDEO INSTEAD OF TEXT LETTER */}
        <video
          src={loveVideo}
          className="letter-video"
          autoPlay
          loop
          playsInline
          controls
        />

        <button onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default LoveLetterModal;