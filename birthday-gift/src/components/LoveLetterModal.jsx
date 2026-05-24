import '../styles/letter.css';

function LoveLetterModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <h2>💌 My Love Letter</h2>

        <p>
          My love ❤️ <br /><br />
          You are the reason my world feels beautiful. <br />
          Every moment with you is a blessing ✨ <br />
          I made this just for you 🎁 <br /><br />
          Happy Birthday my everything 💖
        </p>

        <button onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default LoveLetterModal;