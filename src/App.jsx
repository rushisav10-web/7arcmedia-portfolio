
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./App.css";
import "./Navbar.css";
import "./Hero.css";
import "./WhatWeDo.css";
import "./Campaigns.css";
import "./Results.css";
import "./Process.css";
import "./Why.css";
import "./Network.css";
import "./Footer.css";
import "./Pricing.css";
import "./TopContent.css";
import "./Songs.css";

import WhyWorkWithUs from "./WhyWorkWithUs";
import elaAceleraArtwork from "./assets/campaigns/ela-acelera.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(0);
  const songsTrackRef = useRef(null);

  const topPerformingContent = [
    {
      id: 1,
      video: "/videos/ela acelera1.mp4",
      views: "13.7M Views",
      tiktok: "https://vt.tiktok.com/ZSbpkGtoN/",
    },
    {
      id: 2,
      video: "/videos/yala slowed1.mp4",
      views: "332k Views",
      tiktok: "https://vt.tiktok.com/ZSbpkE7B9/",
    },
    {
      id: 3,
      video: "/videos/hardtekk2.mp4",
      views: "2.7M Views",
      tiktok: "https://vt.tiktok.com/ZSbpB1y6Y/",
    },
    {
      id: 4,
      video: "/videos/speakup1.mp4",
      views: "1M Views",
      tiktok: "https://vt.tiktok.com/ZSbpBRGLN/",
    },
    {
      id: 5,
      video: "/videos/yalaslowed3.mp4",
      views: "217k Views",
      tiktok: "https://vt.tiktok.com/ZSbpk3wuQ/",
    },
  ];

  const songs = [
    {
      title: "YALA - SLOWED",
      artist: "QMIIR, DJ Zarek, Irokz",
      artwork:
        "https://open.voidware.de/track/0h4kC7ZNJZDEYDlYQTlDoB",
      spotify:
        "https://open.spotify.com/track/0h4kC7ZNJZDEYDlYQTlDoB",
    },
    {
      title: "PENTHOUSE",
      artist: "Fyex, Dj Samir, mati2k",
      artwork:
        "https://open.voidware.de/track/2LRtS39Bpt9sIOfshAFPnr",
      spotify:
        "https://open.spotify.com/track/2LRtS39Bpt9sIOfshAFPnr",
    },
    {
      title: "SPEAK UP",
      artist: "PUNXO",
      artwork:
        "https://open.voidware.de/track/0we6QNkfHWedfeuIyai4aG",
      spotify:
        "https://open.spotify.com/track/0we6QNkfHWedfeuIyai4aG",
    },
    {
      title: "ELA ACELERA",
      artist: "Sayfalse, Zericxxn, D4R.IO",
      artwork: elaAceleraArtwork,
      spotify:
        "https://open.spotify.com/track/6br6Ek1t1An046l7kocCwH",
    },
    {
      title: "S&M HARDTEKK",
      artist: "VLNCRSH",
      artwork:
        "https://open.voidware.de/track/4E9qJpXxBha2JLT92NC7bL",
      spotify:
        "https://open.spotify.com/track/4E9qJpXxBha2JLT92NC7bL",
    },
    {
      title: "S&M HARDSTYLE",
      artist: "Renstiel",
      artwork:
        "https://open.voidware.de/track/0i6OcBQUMfMhCecDuYFzPK",
      spotify:
        "https://open.spotify.com/track/0i6OcBQUMfMhCecDuYFzPK",
    },
    {
      title: "I Hate You",
      artist: "lolwtfitsjake",
      artwork:
        "https://open.voidware.de/track/54UuocT4NpUDQrgUGz7S8E",
      spotify:
        "https://open.spotify.com/track/54UuocT4NpUDQrgUGz7S8E",
    },
    {
      title: "MY DESTINY HARDTEKK",
      artist: "conqr, RADIXNT",
      artwork:
        "https://open.voidware.de/track/0JAsPa4xiUpZinuRkOorJ0",
      spotify:
        "https://open.spotify.com/track/0JAsPa4xiUpZinuRkOorJ0",
    },
    {
      title: "ESPAÇO LIMINAL 2",
      artist: "NXGHT!, KGJ, Scythermane",
      artwork:
        "https://open.voidware.de/track/6NBMY5dl0oFqZwbnyurtnr",
      spotify:
        "https://open.spotify.com/track/6NBMY5dl0oFqZwbnyurtnr",
    },
    {
      title: "MONTAGEM MANDELA",
      artist: "MXZI, Dj Samir, volkz",
      artwork:
        "https://open.voidware.de/track/7mF8kh1OlLFawmMD1taJLh",
      spotify:
        "https://open.spotify.com/track/7mF8kh1OlLFawmMD1taJLh",
    },
    {
      title: "MONTAGEM TENTAÇÃO",
      artist: "Dexhenry, DJ QUIRINO, ZomboBox!",
      artwork:
        "https://open.voidware.de/track/4RnqCp46W19Wd37v2mFswy",
      spotify:
        "https://open.spotify.com/track/4RnqCp46W19Wd37v2mFswy",
    },
    {
      title: "The Crazy In Your Eyes",
      artist: "lolwtfitsjake",
      artwork:
        "https://open.voidware.de/track/4OQ20fwtLIgJ6MjVFs1ROi",
      spotify:
        "https://open.spotify.com/track/4OQ20fwtLIgJ6MjVFs1ROi",
    },
  ];

  const nextContent = () => {
    setActiveContent(
      (current) => (current + 1) % topPerformingContent.length
    );
  };

  const previousContent = () => {
    setActiveContent(
      (current) =>
        (current - 1 + topPerformingContent.length) %
        topPerformingContent.length
    );
  };

  const scrollSongs = (direction) => {
    if (!songsTrackRef.current) return;

    songsTrackRef.current.scrollBy({
      left: direction * songsTrackRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const currentContent = topPerformingContent[activeContent];

  const reveal = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const revealSlow = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="site">
      {/* ==================== NAVBAR ==================== */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          7arc<span>media</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#what-we-do">What We Do</a>
          <a href="#campaigns">Work</a>
          <a href="#songs">Songs</a>
          <a href="#process">Process</a>
          <a href="#why-work-with-us">Why Work With Us</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a Campaign
          <ArrowUpRight size={16} />
        </a>

        <button
          className="nav-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a
                href="#what-we-do"
                onClick={() => setMenuOpen(false)}
              >
                What We Do
              </a>

              <a
                href="#campaigns"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>

              <a
                href="#songs"
                onClick={() => setMenuOpen(false)}
              >
                Songs
              </a>

              <a
                href="#process"
                onClick={() => setMenuOpen(false)}
              >
                Process
              </a>

              <a
                href="#why-work-with-us"
                onClick={() => setMenuOpen(false)}
              >
                Why Work With Us
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

              <a
                href="#contact"
                className="mobile-cta"
                onClick={() => setMenuOpen(false)}
              >
                Start a Campaign
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.div className="hero-eyebrow" variants={reveal}>
              TikTok Music Marketing
            </motion.div>

            <motion.h1 variants={reveal}>
              TikTok campaigns
              <br />
              <span>built around your release.</span>
            </motion.h1>

            <motion.p className="hero-description" variants={reveal}>
              We help labels promote their music through TikTok campaigns
              with relevant editors and IRL creators.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <a href="#contact" className="hero-primary">
                Start a Campaign
                <ArrowUpRight size={18} />
              </a>

              <a href="#campaigns" className="hero-secondary">
                View Our Work
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit" />
          <div className="hero-orbit-two" />
          <div className="hero-core" />

          <div className="hero-card hero-card-one">
            <span>Campaigns</span>
            <strong>Built for TikTok</strong>
          </div>

          <div className="hero-card hero-card-two">
            <span>Creators</span>
            <strong>Selected for your release</strong>
          </div>

          <div className="hero-card hero-card-three">
            <span>Distribution</span>
            <strong>Managed from start to finish</strong>
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE DO ==================== */}
      <section id="what-we-do" className="what-section">
        <div className="what-inner">
          <div className="what-top">
            <motion.div
              className="what-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <div className="section-label">
                What We Do
              </div>

              <h2>
                TikTok music campaigns.
                <br />
                <span>Built around your release.</span>
              </h2>
            </motion.div>

            <motion.div
              className="what-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <p>
                We help labels and artists build momentum around their
                releases through relevant TikTok editors and IRL creators.
                From creator selection to campaign management and performance
                tracking, we bring the right people and content together to
                get your music heard.
              </p>

              <div className="what-line" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== TOP PERFORMING CONTENT ==================== */}
      <motion.section
        id="campaigns"
        className="top-content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealSlow}
      >
        <div className="top-content-inner">
          <div className="top-content-header">
            <motion.div variants={reveal}>
              <div className="section-label">
                Top Performing Content
              </div>

              <h2>
                Content built to
                <br />
                perform.
              </h2>
            </motion.div>

            <motion.p variants={reveal}>
              A look at some of our best-performing TikTok content and the
              reach it generated.
            </motion.p>
          </div>

          <motion.div
            className="top-content-showcase"
            variants={revealSlow}
          >
            <div className="top-content-stage">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContent.id}
                  className="top-content-video-wrap"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) nextContent();
                    if (info.offset.x > 60) previousContent();
                  }}
                >
                  <video
                    className="top-content-video"
                    src={currentContent.video}
                    controls
                    playsInline
                    preload="metadata"
                  />

                  <div className="top-content-overlay">
                    <span className="top-content-label">
                      Top Performing Content
                    </span>

                    <span className="top-content-views">
                      {currentContent.views}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                className="top-content-arrow top-content-arrow-left"
                onClick={previousContent}
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="top-content-arrow top-content-arrow-right"
                onClick={nextContent}
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="top-content-tiktok-wrapper">
              <a
                href={currentContent.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="top-content-tiktok"
              >
                View on TikTok
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="top-content-bottom">
              <div className="top-content-counter">
                <span>
                  {String(activeContent + 1).padStart(2, "0")}
                </span>

                <div className="top-content-progress">
                  {topPerformingContent.map((item, index) => (
                    <button
                      key={item.id}
                      className={index === activeContent ? "active" : ""}
                      onClick={() => setActiveContent(index)}
                      aria-label={`View video ${index + 1}`}
                    />
                  ))}
                </div>

                <span>
                  {String(topPerformingContent.length).padStart(2, "0")}
                </span>
              </div>

              <div className="top-content-swipe">
                Swipe to explore
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ==================== SONGS WE'VE WORKED ON ==================== */}
      <section id="songs" className="songs-section">
        <div className="songs-inner">
          <motion.div
            className="songs-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="songs-heading">
              <div className="section-label">
                Songs We've Worked On
              </div>

              <h2>
                Releases we've
                <br />
                <span>helped build momentum around.</span>
              </h2>

              <p className="songs-description">
                A selection of releases we've supported through our music
                campaigns.
              </p>
            </div>

            <div className="songs-controls">
              <button
                type="button"
                className="songs-arrow"
                onClick={() => scrollSongs(-1)}
                aria-label="Scroll to previous songs"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                className="songs-arrow"
                onClick={() => scrollSongs(1)}
                aria-label="Scroll to next songs"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="songs-track"
            ref={songsTrackRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={revealSlow}
          >
            {songs.map((song) => (
              <article className="song-card" key={song.spotify}>
                <div className="song-artwork-wrap">
                  <img
                    className="song-artwork"
                    src={song.artwork}
                    alt={`${song.title} cover artwork`}
                    loading="lazy"
                  />
                </div>

                <div className="song-info">
                  <h3 className="song-title" title={song.title}>
                    {song.title}
                  </h3>

                  {song.artist && (
                    <p className="song-artist" title={song.artist}>
                      {song.artist}
                    </p>
                  )}

                  <a
                    className="song-spotify-link"
                    href={song.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen on Spotify
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </motion.div>

          <p className="songs-hint">
            Swipe to explore the releases →
          </p>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section id="process" className="process-section">
        <div className="process-inner">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="section-label">
              Process
            </div>

            <h2>
              From strategy
              <br />
              <span>to distribution.</span>
            </h2>
          </motion.div>

          <div className="process-list">
            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">01</span>

              <div>
                <h3>Understand your release</h3>
                <p>
                  We understand the release, campaign goals, target audience,
                  budget and distribution requirements.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">02</span>

              <div>
                <h3>Creator selection</h3>
                <p>
                  We select relevant TikTok editors and creators based on
                  their audience, content and past performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">03</span>

              <div>
                <h3>Management</h3>
                <p>
                  We coordinate the campaign, manage creator distribution,
                  track placements and keep the campaign running smoothly.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">04</span>

              <div>
                <h3>Tracking &amp; reports</h3>
                <p>
                  We track views and campaign performance, providing clear
                  reporting throughout the campaign.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== WHY WORK WITH US ==================== */}
      <WhyWorkWithUs />

      {/* ==================== CONTACT / FOOTER ==================== */}
      <footer id="contact" className="footer-section">
        <div className="footer-inner">
          <motion.div
            className="footer-main"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="section-label">
              Contact
            </div>

            <h2>
              Have a release
              <br />
              <span>to promote?</span>
            </h2>

            <p>
              Tell us about your release and campaign requirements.
            </p>

            <a
              href="https://www.instagram.com/7arcmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Get in Touch
              <ArrowUpRight size={20} />
            </a>
          </motion.div>

          <div className="footer-bottom">
            <div className="footer-logo">
              7arc<span>media</span>
            </div>

            <p>
              © {new Date().getFullYear()} 7arcmedia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
