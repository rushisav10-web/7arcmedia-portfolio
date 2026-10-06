import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

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

import yalaArtwork from "./assets/campaigns/yala.jpg";
import elaAceleraArtwork from "./assets/campaigns/ela-acelera.jpg";
import selfAwareArtwork from "./assets/campaigns/self-aware.jpg";
import smHardtekkArtwork from "./assets/campaigns/sm-hardtekk.jpg";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealSlow = {
  hidden: { opacity: 0, y: 55 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const campaigns = [
  {
    title: "YALA — Super Slowed",
    artist: "QMIIR, DJ Zarek, Irokz",
    type: "TikTok Music Campaign",
    number: "01",
    className: "campaign-purple",
    spotify:
      "https://open.spotify.com/track/0TcB7NLT53MmAdgocbP2x0",
    artwork: yalaArtwork,
  },
  {
    title: "ELA ACELERA",
    artist: "Sayfalse, Zericxxn, D4R.IO",
    type: "TikTok Music Campaign",
    number: "02",
    className: "campaign-red",
    spotify:
      "https://open.spotify.com/track/6br6Ek1t1An046l7kocCwH",
    artwork: elaAceleraArtwork,
  },
  {
    title: "Self Aware — Orchestral",
    artist: "Orchestra Club",
    type: "TikTok Music Campaign",
    number: "03",
    className: "campaign-blue",
    spotify:
      "https://open.spotify.com/track/5G8IylSGtcriQsRM135nx0",
    artwork: selfAwareArtwork,
  },
  {
    title: "S&M HARDTEKK — SLOWED",
    artist: "VLNCRSH",
    type: "TikTok Music Campaign",
    number: "04",
    className: "campaign-orange",
    spotify:
      "https://open.spotify.com/track/6PmwG7RQArxW8CKAgkdwLO",
    artwork: smHardtekkArtwork,
  },
];

const results = [
  { value: "XX+", label: "Campaigns" },
  { value: "XXX+", label: "Creators & Editors" },
  { value: "XXM+", label: "Total Views" },
  { value: "XXM+", label: "Highest Campaign Reach" },
];

const processSteps = [
  {
    number: "01",
    title: "Campaign Brief",
    description:
      "We understand the release, goals, audience and campaign requirements.",
  },
  {
    number: "02",
    title: "Creator Selection",
    description:
      "We find relevant editors and creators that fit the campaign and its audience.",
  },
  {
    number: "03",
    title: "Campaign Launch",
    description:
      "Once approved, creators publish content using the track across TikTok.",
  },
  {
    number: "04",
    title: "Tracking & Results",
    description:
      "We monitor posts, views, engagement and overall campaign performance.",
  },
];

const whyFeatures = [
  {
    number: "01",
    title: "Transparent Process",
    description:
      "You know what is happening at every stage of the campaign, from creator selection to final results.",
  },
  {
    number: "02",
    title: "Competitive Creator Rates",
    description:
      "We negotiate competitive prices with editors and creators so more of your budget goes toward the campaign itself.",
  },
  {
    number: "03",
    title: "Relevant Creators",
    description:
      "We focus on creators whose content and audience make sense for the release and campaign.",
  },
  {
    number: "04",
    title: "Client Approval",
    description:
      "You review and approve the selected creators before the campaign goes live.",
  },
  {
    number: "05",
    title: "End-to-End Management",
    description:
      "We handle creator sourcing, communication, coordination and campaign tracking for you.",
  },
  {
    number: "06",
    title: "Weekly Reports",
    description:
      "Clear campaign updates keep you informed about posts, views and overall performance.",
  },
];

const networkCategories = [
  "Phonk",
  "Hardtekk",
  "House",
  "Pop",
  "Dance",
  "Meme",
  "Anime",
  "Cars",
  "Gym",
  "Lifestyle",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#top" className="nav-logo" onClick={closeMenu}>
          7arcmedia
        </a>

        <div className="nav-links">
          <a href="#campaigns">Work</a>
          <a href="#process">Process</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="mailto:hello@7arcmedia.com"
          className="nav-cta"
        >
          Start a Campaign
          <ArrowUpRight size={14} />
        </a>

        <button
          className="nav-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#campaigns" onClick={closeMenu}>
                Work
              </a>

              <a href="#process" onClick={closeMenu}>
                Process
              </a>

              <a href="#why" onClick={closeMenu}>
                Why Us
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

              <a
                href="mailto:hello@7arcmedia.com"
                className="mobile-cta"
                onClick={closeMenu}
              >
                Start a Campaign
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                className="hero-eyebrow"
                variants={reveal}
              >
                TikTok Music Marketing
              </motion.div>

              <motion.h1 variants={revealSlow}>
                TikTok campaigns
                <br />
                <span>built around your release.</span>
              </motion.h1>

              <motion.p
                className="hero-description"
                variants={reveal}
              >
                We help labels promote their music through TikTok
                campaigns with relevant editors and IRL creators.
              </motion.p>

              <motion.div
                className="hero-actions"
                variants={reveal}
              >
                <a
                  href="mailto:hello@7arcmedia.com"
                  className="hero-primary"
                >
                  Start a Campaign
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="#campaigns"
                  className="hero-secondary"
                >
                  View Our Work
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="hero-orbit" />
            <div className="hero-orbit-two" />
            <div className="hero-core" />

            <div className="hero-card hero-card-one">
              <span>Campaigns</span>
              <strong>Creator-led</strong>
            </div>

            <div className="hero-card hero-card-two">
              <span>Network</span>
              <strong>Relevant audiences</strong>
            </div>

            <div className="hero-card hero-card-three">
              <span>Management</span>
              <strong>End to end</strong>
            </div>
          </motion.div>
        </section>

        {/* WHAT WE DO */}
        <motion.section
          className="what-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <div className="what-inner">
            <div className="what-top">
              <motion.div
                className="what-heading"
                variants={reveal}
              >
                <div className="section-label">
                  <span>01</span>
                  What We Do
                </div>

                <h2>
                  Music promotion built for TikTok.
                </h2>
              </motion.div>

              <motion.div
                className="what-copy"
                variants={revealSlow}
              >
                <p>
                  We help labels promote their music through TikTok
                  campaigns with relevant editors and IRL creators.
                  From creator sourcing to campaign management and
                  performance tracking, we handle it end to end.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="what-line"
              variants={reveal}
            />

            <motion.div
              className="what-bottom"
              variants={stagger}
            >
              <motion.div
                className="what-item"
                variants={reveal}
              >
                <span className="what-item-number">01</span>
                <h3>Creator Sourcing</h3>
                <p>
                  We find editors and creators relevant to the
                  release and its audience.
                </p>
              </motion.div>

              <motion.div
                className="what-item"
                variants={reveal}
              >
                <span className="what-item-number">02</span>
                <h3>Campaign Management</h3>
                <p>
                  We coordinate creators, communication and
                  campaign execution from start to finish.
                </p>
              </motion.div>

              <motion.div
                className="what-item"
                variants={reveal}
              >
                <span className="what-item-number">03</span>
                <h3>Performance Tracking</h3>
                <p>
                  We monitor campaign activity and keep you
                  updated on performance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CAMPAIGNS */}
        <motion.section
          id="campaigns"
          className="campaigns-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="campaigns-header">
            <motion.div variants={reveal}>
              <div className="section-label">
                <span>02</span>
                Campaigns
              </div>

              <h2>Campaigns we've worked on.</h2>
            </motion.div>

            <motion.p variants={reveal}>
              A look at some of the music campaigns we've worked on
              across different sounds, audiences and creator
              communities.
            </motion.p>
          </div>

          <motion.div
            className="campaign-grid"
            variants={stagger}
          >
            {campaigns.map((campaign) => (
              <motion.a
                key={campaign.number}
                href={campaign.spotify}
                target="_blank"
                rel="noreferrer"
                className={`campaign-card ${campaign.className}`}
                variants={reveal}
              >
                <div className="campaign-art">
                  <img
                    src={campaign.artwork}
                    alt={`${campaign.title} campaign artwork`}
                  />

                  <span className="campaign-number">
                    {campaign.number}
                  </span>

                  <span className="art-mark">
                    <ArrowUpRight size={13} />
                  </span>

                  <span className="campaign-hover">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className="campaign-info">
                  <div className="campaign-type">
                    {campaign.type}
                  </div>

                  <h3>{campaign.title}</h3>

                  <p>{campaign.artist}</p>

                  <span className="campaign-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* RESULTS */}
        <motion.section
          className="results-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="results-inner">
            <div className="results-header">
              <motion.div variants={reveal}>
                <div className="section-label">
                  <span>03</span>
                  Results
                </div>

                <h2>
                  Built around
                  <br />
                  performance.
                </h2>
              </motion.div>

              <motion.p variants={reveal}>
                Campaign performance built through relevant creators,
                consistent execution and focused campaign management.
              </motion.p>
            </div>

            <motion.div
              className="results-grid"
              variants={stagger}
            >
              {results.map((result) => (
                <motion.div
                  className="result-card"
                  key={result.label}
                  variants={reveal}
                >
                  <div className="result-number">
                    {result.value}
                  </div>

                  <div className="result-label">
                    {result.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="results-note"
              variants={reveal}
            >
              * Performance figures will be updated with verified
              campaign data.
            </motion.p>
          </div>
        </motion.section>

        {/* PROCESS */}
        <motion.section
          id="process"
          className="process-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="process-inner">
            <div className="process-header">
              <motion.div variants={reveal}>
                <div className="section-label">
                  <span>04</span>
                  Process
                </div>

                <h2>
                  From release
                  <br />
                  to campaign.
                </h2>
              </motion.div>

              <motion.p variants={reveal}>
                A straightforward process designed to keep campaigns
                organised, transparent and focused.
              </motion.p>
            </div>

            <motion.div
              className="process-list"
              variants={stagger}
            >
              {processSteps.map((step) => (
                <motion.div
                  className="process-item"
                  key={step.number}
                  variants={reveal}
                >
                  <span className="process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <span className="process-arrow">
                    <ArrowUpRight size={15} />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* WHY 7ARCMEDIA */}
        <motion.section
          id="why"
          className="why-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="why-inner">
            <div className="why-header">
              <motion.div variants={reveal}>
                <div className="section-label">
                  <span>05</span>
                  Why 7arcmedia
                </div>

                <h2>
                  Built to make
                  <br />
                  campaigns easier.
                </h2>
              </motion.div>

              <motion.p variants={reveal}>
                Clear communication, relevant creators and hands-on
                campaign management from start to finish.
              </motion.p>
            </div>

            <motion.div
              className="why-grid"
              variants={stagger}
            >
              {whyFeatures.map((feature) => (
                <motion.div
                  className="why-card"
                  key={feature.number}
                  variants={reveal}
                >
                  <span className="why-number">
                    {feature.number}
                  </span>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CREATOR NETWORK */}
        <motion.section
          className="network-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="network-inner">
            <div className="network-header">
              <motion.div variants={reveal}>
                <div className="section-label">
                  <span>06</span>
                  Creator Network
                </div>

                <h2>
                  Different sounds.
                  <br />
                  Different communities.
                </h2>
              </motion.div>

              <motion.p variants={reveal}>
                Our creator network spans multiple content styles,
                niches and communities across TikTok.
              </motion.p>
            </div>

            <motion.div
              className="network-cloud"
              variants={stagger}
            >
              {networkCategories.map((category) => (
                <motion.div
                  className="network-tag"
                  key={category}
                  variants={reveal}
                >
                  {category}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="network-bottom"
              variants={reveal}
            >
              <span>Relevant creators for every release</span>
              <div className="network-bottom-line" />
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* FOOTER / FINAL CTA */}
      <footer
        id="contact"
        className="footer"
      >
        <div className="footer-inner">
          <motion.div
            className="footer-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div
              className="footer-cta-label"
              variants={reveal}
            >
              Let's work together
            </motion.div>

            <motion.h2 variants={revealSlow}>
              Have a release coming up?
              <br />
              <span>Let's build a TikTok campaign around it.</span>
            </motion.h2>

            <motion.a
              href="mailto:hello@7arcmedia.com"
              className="footer-cta-button"
              variants={reveal}
            >
              Start a Campaign
              <ArrowUpRight size={15} />
            </motion.a>
          </motion.div>

          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                7arcmedia
              </div>

              <p>
                TikTok music campaigns built around relevant creators,
                editors and communities.
              </p>

              <a
                href="mailto:hello@7arcmedia.com"
                className="footer-email"
              >
                hello@7arcmedia.com
              </a>
            </div>

            <div className="footer-column">
              <h4>Navigation</h4>

              <div className="footer-links">
                <a href="#campaigns">Campaigns</a>
                <a href="#process">Process</a>
                <a href="#why">Why 7arcmedia</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>

              <div className="footer-links">
                <a href="mailto:hello@7arcmedia.com">
                  Email
                </a>

                <a href="#" onClick={(e) => e.preventDefault()}>
                  Instagram
                </a>

                <a href="#" onClick={(e) => e.preventDefault()}>
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} 7arcmedia. All rights
              reserved.
            </p>

            <div className="footer-socials">
              <a href="mailto:hello@7arcmedia.com">
                hello@7arcmedia.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;