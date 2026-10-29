
import { motion } from "framer-motion";
import "./Why.css";

const features = [
  {
    number: "01",
    title: "Full Transparency",
    description:
      "Clear campaign costs, budget visibility and straightforward reporting, so you know what your campaign covers and how it is progressing.",
  },
  {
    number: "02",
    title: "A Strategy for Every Release",
    description:
      "Every release is different. We develop a strategy that fits each track's sound, audience and potential.",
  },
  {
    number: "03",
    title: "Relevant Creators & Editors",
    description:
      "We focus on creators and editors whose content aligns with your music and target audience.",
  },
  {
    number: "04",
    title: "Reliable Campaign Management",
    description:
      "We coordinate campaign activities, manage delivery and keep things moving according to agreed timelines.",
  },
  {
    number: "05",
    title: "Performance Tracking",
    description:
      "We monitor campaign results and provide a clear overview of content performance.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function WhyWorkWithUs() {
  return (
    <section
      id="why-work-with-us"
      className="why-section"
      aria-labelledby="why-heading"
    >
      <div className="why-inner">
        <div className="why-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="section-label">
              Why Work With Us
            </div>

            <h2 id="why-heading">
              Your Campaign,
              <br />
              <span>Handled.</span>
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            We connect your music with relevant TikTok communities
            through creators and editors who understand the content
            their audiences engage with.
          </motion.p>
        </div>

        <motion.div
          className="why-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {features.map((feature) => (
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
    </section>
  );
}

export default WhyWorkWithUs;
