import '../styles/gallery.css';
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Memories 📸</h2>

      <div className="gallery-grid">
        <div className="img-card">
          <img src={photo1} alt="memory1" />
        </div>

        <div className="img-card">
          <img src={photo2} alt="memory2" />
        </div>
      </div>
      <div className="gallery-grid">
        <div className="img-card">
          <img src={photo1} alt="memory1" />
        </div>

        <div className="img-card">
          <img src={photo2} alt="memory2" />
        </div>
      </div>
      
    </section>
  );
}

export default Gallery;