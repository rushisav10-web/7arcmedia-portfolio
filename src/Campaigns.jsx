
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import "./Campaigns.css";

const songs = [
  {
    title: "Magical",
    artists: "Noven",
    spotify: "16Rhgt488xjfhHJqiboWAx",
    cover: "magical.jpg",
  },
  {
    title: "The Path We Led",
    artists: "Noven",
    spotify: "6XrEFBAHWzN9GcEczqWl8N",
    cover: "the-path-we-led.jpg",
  },
  {
    title: "Backseat",
    artists: "Personality Disorder",
    spotify: "2zlHdVkpawCq6aT4KmdrDf",
    cover: "backseat.jpg",
  },
  {
    title: "YALA (Slowed)",
    artists: "QMIIR, DJ Zarek, Irokz",
    spotify: "0h4kC7ZNJZDEYDlYQTlDoB",
    cover: "yala-slowed.jpg",
  },
  {
    title: "ELA ACELERA",
    artists: "Sayfalse, Zericxxn, D4R.IO",
    spotify: "6br6Ek1t1An046l7kocCwH",
    cover: "ela-acelera.jpg",
  },
  {
    title: "PENTHOUSE",
    artists: "Fyex, Dj Samir, mati2k",
    spotify: "2LRtS39Bpt9sIOfshAFPnr",
    cover: "penthouse.jpg",
  },
  {
    title: "SPEAK UP",
    artists: "PUNXO",
    spotify: "0we6QNkfHWedfeuIyai4aG",
    cover: "speak-up.jpg",
  },
  {
    title: "S&M HARDSTYLE (Slowed)",
    artists: "renstiel",
    spotify: "070X5rZ4eybysODRq0FhDV",
    cover: "sm-hardtekk.jpg",
  },
];

export default function Campaigns() {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".campaign-card");
    if (!card) return;

    const styles = window.getComputedStyle(slider);
    const gap =
      parseFloat(styles.columnGap || styles.gap) || 0;

    slider.scrollBy({
      left:
        direction *
        (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="selected-work" className="campaigns-section">
      <div className="campaigns-inner">
        <motion.div
          className="campaigns-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="campaigns-heading-copy">
            <span className="campaigns-eyebrow">
              SELECTED RELEASES
            </span>

            <h2>
              Songs We've <span>Worked On.</span>
            </h2>

            <p>
              A selection of songs we've worked on across
              different music genres.
            </p>
          </div>

          <div className="campaigns-controls">
            <button
              type="button"
              className="campaign-arrow"
              onClick={() => slide(-1)}
              aria-label="Previous releases"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              className="campaign-arrow"
              onClick={() => slide(1)}
              aria-label="Next releases"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </motion.div>

        <div className="campaigns-track" ref={sliderRef}>
          {songs.map((song, index) => (
            <motion.article
              className="campaign-card"
              key={song.spotify}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.08,
              }}
            >
              <a
                className="campaign-art-link"
                href={`https://open.spotify.com/track/${song.spotify}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${song.title} on Spotify`}
              >
                <div className="campaign-art">
                  <img
                    className="campaign-cover"
                    src={`/music/${song.cover}`}
                    alt={`${song.title} cover artwork`}
                    loading="lazy"
                  />

                  <span className="campaign-art-index">
                    RELEASE {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="campaign-art-open">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>

              <div className="campaign-card-info">
                <div className="campaign-card-copy">
                  <h3>{song.title}</h3>
                  <p>{song.artists}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="campaigns-bottom">
          <span className="campaigns-bottom-line" />

          <p>
            And many more releases across different music genres.
          </p>

          <span className="campaigns-bottom-line" />
        </div>
      </div>
    </section>
  );
}
