import Image from "next/image";

const IMAGES = [
  { src: "/gallery/1.jpg", alt: "Baitna Cafe vibe 1" },
  { src: "/gallery/2.jpg", alt: "Baitna Cafe vibe 2" },
  { src: "/gallery/3.jpg", alt: "Baitna Cafe vibe 3" },
  { src: "/gallery/4.jpg", alt: "Baitna Cafe vibe 4" },
  { src: "/gallery/5.jpg", alt: "Baitna Cafe vibe 5" },
  { src: "/gallery/6.jpg", alt: "Baitna Cafe vibe 6" },
];

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="sectionHead">
          <h2>Gallery</h2>
          <p>
            A glimpse of the rooftop mood. (You’ll replace these photos later — the layout stays the same.)
          </p>
        </div>

        {/* Collage */}
        <div className="galleryGrid">
          <div className="gCard gBig">
            <Image fill className="gImg" src={IMAGES[0].src} alt={IMAGES[0].alt} />
          </div>
          <div className="gCard">
            <Image fill className="gImg" src={IMAGES[1].src} alt={IMAGES[1].alt} />
          </div>
          <div className="gCard">
            <Image fill className="gImg" src={IMAGES[2].src} alt={IMAGES[2].alt} />
          </div>
          <div className="gCard">
            <Image fill className="gImg" src={IMAGES[3].src} alt={IMAGES[3].alt} />
          </div>
          <div className="gCard gWide">
            <Image fill className="gImg" src={IMAGES[4].src} alt={IMAGES[4].alt} />
          </div>
        </div>

        {/* Scroll strip (nice on mobile) */}
        <div className="galleryStrip">
          {IMAGES.map((img, idx) => (
            <div className="stripItem" key={idx}>
              <Image fill className="gImg" src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        <div className="small" style={{ marginTop: 10 }}>
          Tip: Use 6–10 rooftop shots (wide + close-up drinks + ambience). The design adapts automatically.
        </div>
      </div>
    </section>
  );
}
