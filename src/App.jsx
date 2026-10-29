
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Layers,
  Eye,
  Target,
} from "lucide-react";

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

  const services = [
    {
      number: "01",
      title: "Targeted Seeding",
      description:
        "We match each release with relevant TikTok editors and niche communities based on the track's sound, audience and potential.",
      icon: Target,
      tags: ["Relevant TikTok Editors", "Niche Communities"],
    },
    {
      number: "02",
      title: "Paid Per 1K Views",
      description:
        "We match your track with relevant TikTok editors whose content fits the sound, helping your music reach the right communities. You pay based on the views generated, with pricing calculated per 1,000 views.",
      icon: Eye,
      tags: ["Relevant TikTok Editors", "Pay Per 1K Views"],
    },
    {
      number: "03",
      title: "Content Distribution",
      description:
        "High volume, consistent content distribution across TikTok and Instagram, using relevant editors and pages to get your music in front of the right audiences.",
      icon: Layers,
      tags: ["Daily Content", "Multi Page Strategy"],
    },
  ];

  return (
    <div className="site">
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          7arc<span>media</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#what-we-do">What We Do</a>
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

            <motion.div
              className="hero-transparency-label"
              variants={reveal}
            >
              FULL TRANSPARENCY
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

      <section id="what-we-do" className="what-we-do-section">
        <div className="what-we-do-inner">
          <motion.div
            className="what-we-do-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="section-label">Our Services</div>

            <h2>
              What We <span>Do.</span>
            </h2>

            <p>
              Music marketing solutions built around your releases,
              campaign goals, and target audiences.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <motion.article
                  className="service-card"
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="service-card-top">
                    <span className="service-number">
                      {service.number}
                    </span>

                    <div className="service-icon">
                      <ServiceIcon size={23} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span className="service-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="service-link"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Discuss this service
                    <ArrowUpRight size={17} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

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

      <WhyWorkWithUs />

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
