import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Message from './components/Message';
import MusicPlayer from './components/MusicPlayer';
import LoveLetterModal from './components/LoveLetterModal';
import Love from './components/Love';

function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="app">

      <Navbar />

      <section id="home">
        <Hero onOpenLetter={() => setShowLetter(true)} />
      </section>

      <section id="about">
        <Message />
      </section>

      <section id="music">
        <MusicPlayer />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      {/* LOVE SECTION */}
      <section id="love">
        <Love />
      </section>

      {/* LOVE LETTER MODAL */}
      <LoveLetterModal
        show={showLetter}
        onClose={() => setShowLetter(false)}
      />

    </div>
  );
}

export default App;