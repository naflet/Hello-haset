import { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        ❤️ Birthday Gift
      </div>

      <div className={`nav-links ${open ? 'active' : ''}`}>

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#gallery" onClick={() => setOpen(false)}>Memories</a>
        <a href="#music" onClick={() => setOpen(false)}>Music</a>
        <a href="#contact" onClick={() => setOpen(false)}>Love</a>

      </div>

      <div
        className={`menu ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  );
}

export default Navbar;