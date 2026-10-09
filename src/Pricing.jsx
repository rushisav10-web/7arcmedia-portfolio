
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import "./Pricing.css";

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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const shortTermFeatures = [
  "Campaign brief & requirements",
  "Immediate distribution through relevant TikTok editors/creators",
  "Creator/page tiers ranging from targeted smaller pages to established pages with 1M+ followers",
  "Placement coordination & execution",
  "Performance tracking",
  "Campaign completed within the agreed deadline",
];

const longTermFeatures = [
  "Ongoing campaign briefs",
  "Multiple releases",
  "Continuous editor/creator sourcing",
  "Relevant creator/page distribution",
  "Ongoing campaign management",
  "Performance tracking & reporting",
  "Campaign optimization based on performance",
];

function PricingCard({
  type,
  title,
  price,
  priceSuffix,
  description,
  note,
  features,
  featured = false,
}) {
  return (
    <motion.div
      className={`pricing-card ${featured ? "pricing-card-featured" : ""}`}
      variants={reveal}
    >
      <div className="pricing-card-top">
        <div className="pricing-type">{type}</div>

        <h3>{title}</h3>

        <div className="pricing-price-row">
          <span className="pricing-starting">Starting from</span>

          <div className="pricing-price">
            <span>{price}</span>
            {priceSuffix && <small>{priceSuffix}</small>}
          </div>
        </div>

        <p className="pricing-description">
          {description}
        </p>

        {note && (
          <p className="pricing-note">
            {note}
          </p>
        )}
      </div>

      <div className="pricing-divider" />

      <div className="pricing-module">
        <div className="pricing-module-label">
          Module 1
        </div>

        <h4>Pay Per Post</h4>
      </div>

      <ul className="pricing-features">
        {features.map((feature) => (
          <li key={feature}>
            <span className="pricing-check">
              <Check size={13} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-module pricing-module-secondary">
        <div className="pricing-module-label">
          Module 2
        </div>

        <h4>Guaranteed Views</h4>

        <p>
          Pay for a guaranteed number of targeted views.
        </p>
      </div>

      <a href="/start-a-campaign" className="pricing-cta">
        Start a Campaign
        <ArrowUpRight size={15} />
      </a>
    </motion.div>
  );
}

function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="pricing-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      <div className="pricing-inner">
        <motion.div
          className="pricing-header"
          variants={reveal}
        >
          <div className="pricing-label">
            Pricing
          </div>

          <h2>
            Flexible campaign options.
          </h2>

          <p>
            Flexible campaign options built around your release,
            goals and distribution requirements.
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={stagger}
        >
          <PricingCard
            type="Short-Term"
            title="Immediate distribution for a specific release"
            price="$500"
            description="Built for labels and artists looking to create momentum around a specific release within a defined campaign period."
            features={shortTermFeatures}
          />

          <PricingCard
            type="Long-Term"
            title="Consistent distribution across multiple releases"
            price="$5,000"
            priceSuffix="/ month"
            description="Built for labels and artists looking for ongoing TikTok promotion across multiple releases."
            note="Monthly campaign budgets can scale from $5,000 to $20,000+ depending on the releases, distribution and campaign requirements."
            features={longTermFeatures}
            featured
          />
        </motion.div>

        <motion.p
          className="pricing-bottom-note"
          variants={reveal}
        >
          Campaigns can be adjusted based on your release,
          target audience and campaign goals.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Pricing;
