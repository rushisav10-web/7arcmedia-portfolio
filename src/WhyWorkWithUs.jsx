
import { motion } from "framer-motion";
import "./Why.css";

const features = [
  {
    number: "01",
    title: "Genre Understanding",
    description:
      "We understand different music genres and the communities around them, helping us find the right direction for every release.",
  },
  {
    number: "02",
    title: "Carefully Selected Creators",
    description:
      "We select creators and editors based on their content, style and audience rather than simply focusing on numbers.",
  },
  {
    number: "03",
    title: "Targeted Campaigns",
    description:
      "Every campaign is planned around your track, connecting it with creators and communities that naturally fit the sound.",
  },
  {
    number: "04",
    title: "A Network Built Around Music",
    description:
      "We work with a growing network of music editors and creators across different genres and content communities.",
  },
  {
    number: "05",
    title: "Campaign Tracking",
    description:
      "We keep track of published content and campaign performance, giving you a clear view of how your release is progressing.",
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
            We bring music, creators and communities together
            through carefully planned campaigns built around
            the sound and audience of each release.
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
