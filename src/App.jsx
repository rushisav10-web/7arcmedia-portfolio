
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Target,
  Layers,
} from "lucide-react";

import "./App.css";
import "./Navbar.css";
import "./Hero.css";
import "./WhatWeDo.css";
import "./BrandStory.css";
import "./Results.css";
import "./Process.css";
import "./Why.css";
import "./Network.css";
import "./Footer.css";
import "./Pricing.css";

import WhyWorkWithUs from "./WhyWorkWithUs";
import Campaigns from "./Campaigns";

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

  const campaigns = [
    {
      number: "01",
      title: "Fan Edit Campaigns",
      description:
        "We connect your music with fan editors who create content around characters, shows, games, artists and communities that fit your sound.",
      icon: Layers,
    },
    {
      number: "02",
      title: "Creator Campaigns",
      description:
        "We match your music with creators in its genre, selecting them based on their content style, audience and the music they share.",
      icon: Target,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "BRIEF",
      subtitle: "Understanding your release",
      description:
        "Tell us about your track, release date, goals and target audience. We use these details to shape your campaign.",
    },
    {
      number: "02",
      title: "MATCH",
      subtitle: "Finding the right creators",
      description:
        "We identify creators and editors whose content, style and communities fit your music.",
    },
    {
      number: "03",
      title: "LAUNCH",
      subtitle: "Getting your campaign live",
      description:
        "We coordinate the selected creators, manage content delivery and get your campaign moving.",
    },
    {
      number: "04",
      title: "TRACK",
      subtitle: "Following campaign progress",
      description:
        "We monitor published content, track views and share updates so you can follow your campaign's progress.",
    },
  ];

  return (
    <div className="site">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          7arc<span>media</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#what-we-do">What We Do</a>
          <a href="#process">Process</a>
          <a href="#selected-work">Selected Releases</a>
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
                href="#what-we-do"
                onClick={() => setMenuOpen(false)}
              >
                What We Do
              </a>

              <a
                href="#process"
                onClick={() => setMenuOpen(false)}
              >
                Process
              </a>

              <a
                href="#selected-work"
                onClick={() => setMenuOpen(false)}
              >
                Selected Releases
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

      {/* Hero */}
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
              7arcmedia is a music marketing agency focused on
              connecting songs with the right creators and
              communities. We work with record labels to build
              targeted campaigns that help music reach the right
              audiences.
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

      {/* Campaign Types */}
      <section id="what-we-do" className="what-we-do-section">
        <div className="what-we-do-inner">
          <motion.div
            className="campaign-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <h2>
              Music Campaigns Built Around{" "}
              <span>Your Sound.</span>
            </h2>

            <p>
              Two ways to connect your music with creators,
              editors and communities that fit your release.
            </p>
          </motion.div>

          <div className="services-grid campaign-types-grid">
            {campaigns.map((campaign, index) => {
              const CampaignIcon = campaign.icon;

              return (
                <motion.article
                  className="service-card campaign-type-card"
                  key={campaign.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="service-card-top">
                    <span className="service-number">
                      {campaign.number}
                    </span>

                    <div className="service-icon">
                      <CampaignIcon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  <h3>{campaign.title}</h3>

                  <p>{campaign.description}</p>
                </motion.article>
              );
            })}
          </div>

          {/* Shared Platform Labels */}
          <motion.div
            className="campaign-platforms"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <span className="platforms-label">
              CAMPAIGNS ACROSS
            </span>

            <div className="platforms-list">
              {["TikTok", "Instagram", "YouTube"].map(
                (platform) => (
                  <span className="service-tag" key={platform}>
                    {platform}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Statement */}
      <motion.section
        className="brand-statement"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={reveal}
      >
        <div className="brand-statement-inner">
          <span className="brand-statement-line" />

          <h2>
            Every sound has its audience.
            <br />
            <span>We help it find them.</span>
          </h2>

          <span className="brand-statement-line" />
        </div>
      </motion.section>

      {/* Process */}
      <section id="process" className="process-section">
        <div className="process-inner">
          <motion.div
            className="process-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="section-label">HOW IT WORKS</div>

            <h2>
              From Brief to
              <br />
              <span>Campaign Launch.</span>
            </h2>

            <p>
              A clear process to get your music in front of
              the right creators and communities.
            </p>
          </motion.div>

          <div className="process-list">
            {processSteps.map((step, index) => (
              <motion.article
                className="process-item"
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ delay: index * 0.12 }}
              >
                <div className="process-card-glow" />

                <div className="process-top">
                  <span className="process-number">
                    {step.number}
                  </span>

                  <span className="process-stage">
                    STAGE {step.number}
                  </span>
                </div>

                <div className="process-content">
                  <h3>{step.title}</h3>

                  <h4>{step.subtitle}</h4>

                  <p>{step.description}</p>
                </div>

                <div className="process-card-bottom">
                  <span>7ARCMEDIA</span>
                  <span className="process-bottom-line" />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="process-footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <span className="process-footer-dot" />

            <p>
              Every release gets a campaign built around its sound.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selected Releases */}
      <Campaigns />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Contact */}
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
