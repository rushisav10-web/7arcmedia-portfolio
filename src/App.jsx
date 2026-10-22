
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import "./App.css";
import "./Navbar.css";
import "./Hero.css";
import "./WhatWeDo.css";
import "./BrandStory.css";
import "./Campaigns.css";
import "./Results.css";
import "./Process.css";
import "./Why.css";
import "./Network.css";
import "./Footer.css";
import "./Pricing.css";

import WhyWorkWithUs from "./WhyWorkWithUs";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="site">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          7arc<span>media</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
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
          aria-expanded={menuOpen}
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
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
              >
                Home
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

      {/* HERO */}
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
            <motion.div
              className="hero-eyebrow"
              variants={reveal}
            >
              TikTok Music Marketing
            </motion.div>

            <motion.h1 variants={reveal}>
              Connecting
              <br />
              Music With
              <br />
              <span>Culture.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={reveal}
            >
              We help labels and artists connect their music with
              the right communities on TikTok, with the goal of
              turning views into streams.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={reveal}
            >
              <a href="#contact" className="hero-primary">
                Start a Campaign
                <ArrowUpRight size={18} />
              </a>

              <a href="#process" className="hero-secondary">
                Our Process
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* WORLD ANIMATION */}
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

      {/* PROCESS */}
      <section id="process" className="process-section">
        <div className="process-inner">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="section-label">Process</div>

            <h2>
              Strategy to
              <br />
              <span>Execution.</span>
            </h2>
          </motion.div>

          <div className="process-list">
            {/* STEP 01 */}
            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">01</span>

              <div>
                <h3>UNDERSTAND</h3>
                <p>
                  We learn about your release, audience, and
                  campaign goals.
                </p>
              </div>
            </motion.div>

            {/* STEP 02 */}
            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">02</span>

              <div>
                <h3>STRATEGIZE</h3>
                <p>
                  We develop a campaign strategy around your
                  release, audience, and distribution goals.
                </p>
              </div>
            </motion.div>

            {/* STEP 03 */}
            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">03</span>

              <div>
                <h3>EXECUTE</h3>
                <p>
                  We work with relevant editors and creators to
                  get your music featured in content that fits
                  your sound and target audience.
                </p>
              </div>
            </motion.div>

            {/* STEP 04 */}
            <motion.div
              className="process-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="process-number">04</span>

              <div>
                <h3>REPORT</h3>
                <p>
                  You receive a clear overview of your campaign's
                  reach and performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <WhyWorkWithUs />

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="footer-section">
        <div className="footer-inner">
          <motion.div
            className="footer-main"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="section-label">Contact</div>

            <h2>
              Have a release
              <br />
              <span>to promote?</span>
            </h2>

            <p>Tell us about your release.</p>

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
              © {new Date().getFullYear()} 7arcmedia.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
