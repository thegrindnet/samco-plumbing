import { galleryItems } from "../../utils/constants.js";
import "./Gallery.css";

function GalleryPhoto({ item }) {
  return (
    <figure className="gallery__item">
      <a
        className="gallery__image-link"
        href={item.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full photo: ${item.title} (new tab)`}
      >
        <img
          className="gallery__image"
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
          decoding="async"
        />
        <span className="gallery__expand" aria-hidden="true">
          ↗
        </span>
      </a>
      <figcaption className="gallery__caption">{item.title}</figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section
      className="gallery section"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="layout">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A closer look</p>
            <h2 id="gallery-title">
              From the ground up.
              <br />
              Down to the details.
            </h2>
          </div>
          <p className="section-heading__aside">
            Explore the work, from underground piping to bathroom fixtures.
            Select a photo to open the full image.
          </p>
        </div>
        <div
          className="gallery__comparison"
          role="group"
          aria-label="Bathroom before and after"
        >
          {galleryItems
            .filter((item) => item.comparison)
            .map((item) => (
              <GalleryPhoto item={item} key={item.id} />
            ))}
        </div>
        <div className="gallery__grid">
          {galleryItems
            .filter((item) => !item.comparison)
            .map((item) => (
              <GalleryPhoto item={item} key={item.id} />
            ))}
        </div>
      </div>
    </section>
  );
}
