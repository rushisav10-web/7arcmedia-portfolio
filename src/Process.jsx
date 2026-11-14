
import { motion } from "framer-motion";
import {
  Music2,
  Film,
  Trophy,
  Clapperboard,
  AudioLines,
  Check,
  ArrowUpRight,
  Radio,
  BarChart3,
} from "lucide-react";

import "./Process.css";

const steps = [
  {
    number: "01",
    title: "BRIEF",
    subtitle: "Share your release",
    description:
      "Tell us about your track, campaign goals and target audience. We use these details to shape your campaign.",
  },
  {
    number: "02",
    title: "MATCH",
    subtitle: "Find the right fit",
    description:
      "We match your music with relevant editors and creators across content niches that fit your release.",
  },
  {
    number: "03",
    title: "LAUNCH",
    subtitle: "Bring the campaign live",
    description:
      "We coordinate content placements and manage the campaign from launch.",
  },
  {
    number: "04",
    title: "TRACK",
    subtitle: "Follow the progress",
    description:
      "We monitor published content, track performance and share campaign updates.",
  },
];

const niches = [
  { name: "Movies", icon: Film },
  { name: "TV Shows", icon: Clapperboard },
  { name: "Sports", icon: Trophy },
  { name: "Anime", icon: AudioLines },
  { name: "Lyrics", icon: Music2 },
];

function BriefVisual() {
  return (
    <div className="process-visual brief-visual">
      <div className="visual-cover">
        <Music2 size={22} />
      </div>

      <div className="visual-track-info">
        <span>YOUR RELEASE</span>
        <strong>New Track</strong>
        <small>Campaign details</small>
      </div>

      <div className="visual-waveform">
        {[12, 20, 15, 27, 18, 32, 22, 29, 14, 25, 18, 30, 13].map(
          (height, i) => (
            <motion.span
              key={i}
              animate={{
                scaleY: [0.45, 1, 0.55, 0.85, 0.45],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
              style={{ height }}
            />
          )
        )}
      </div>
    </div>
  );
}

function MatchVisual() {
  return (
    <div className="process-visual match-visual">
      <div className="visual-niches">
        {niches.map((niche, i) => {
          const Icon = niche.icon;

          return (
            <motion.div
              className="visual-niche"
              key={niche.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.12,
              }}
            >
              <Icon size={14} />
              <span>{niche.name}</span>
            </motion.div>
          );
        })}

        <motion.div
          className="visual-niche visual-niche-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
        >
          <span>+</span>
          <span>And more</span>
        </motion.div>
      </div>

      <motion.div
        className="visual-match-result"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <Check size={16} />
        <span>Relevant creators and editors selected</span>
      </motion.div>
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="process-visual launch-visual">
      <motion.div
        className="visual-launch-icon"
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 0 0 rgba(169, 135, 232, 0.08)",
            "0 0 0 12px rgba(169, 135, 232, 0)",
            "0 0 0 0 rgba(169, 135, 232, 0)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <Radio size={23} />
      </motion.div>

      <div className="visual-launch-info">
        <strong>Campaign is live</strong>
        <span>Coordinated content placements</span>
      </div>

      <motion.div
        className="visual-live-indicator"
        animate={{ opacity: [1, 0.45, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span />
        LIVE
      </motion.div>
    </div>
  );
}

function TrackVisual() {
  const bars = [22, 36, 29, 48, 38, 57, 44, 68, 54, 78, 63, 88];

  return (
    <div className="process-visual track-visual">
      <div className="visual-track-heading">
        <div>
          <span>CAMPAIGN PERFORMANCE</span>
          <strong>Live updates</strong>
        </div>

        <BarChart3 size={21} />
      </div>

      <div className="visual-chart">
        {bars.map((height, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: i * 0.07,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="visual-track-footer">
        <span>
          <i />
          Performance monitored
        </span>
        <ArrowUpRight size={15} />
      </div>
    </div>
  );
}

const visuals = [
  <BriefVisual key="brief" />,
  <MatchVisual key="match" />,
  <LaunchVisual key="launch" />,
  <TrackVisual key="track" />,
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">

        <motion.div
          className="process-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="process-eyebrow">HOW WE WORK</span>

          <h2>
            From Brief to <span>Campaign Launch.</span>
          </h2>

          <p>
            A clear process to connect your music with the right audience.
          </p>
        </motion.div>

        <div className="process-list">
          {steps.map((step, index) => (
            <motion.article
              className="process-item"
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <span className="process-number">{step.number}</span>

              <div className="process-copy">
                <h3>{step.title}</h3>
                <h4>{step.subtitle}</h4>
                <p>{step.description}</p>
              </div>

              <div className="process-item-visual">
                {visuals[index]}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="process-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Every release gets a campaign built around its sound.
        </motion.div>

      </div>
    </section>
  );
}
