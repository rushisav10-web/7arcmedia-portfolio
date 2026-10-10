
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Users,
  Music2,
  Target,
} from "lucide-react";
import "./WhyWorkWithUs.css";

const features = [
  {
    number: "01",
    title: "Reliable Creator Management",
    description:
      "We verify content and placements before processing creator payments, helping reduce the risk of fraudulent submissions.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Deadline-Focused Execution",
    description:
      "We work to complete campaigns within the agreed timeline, with clear reporting on campaign spending and performance.",
    icon: Clock3,
  },
  {
    number: "03",
    title: "Quality Creators",
    description:
      "We select editors and creators based on content quality, relevance and campaign requirements.",
    icon: Users,
  },
  {
    number: "04",
    title: "Correct Sound Usage",
    description:
      "We check that your specified track or sound is attached to campaign content as required.",
    icon: Music2,
  },
  {
    number: "05",
    title: "Relevant Audience Targeting",
    description:
      "We focus distribution on TikTok niches and communities that fit your music and campaign goals.",
    icon: Target,
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="why-work" id="why-work-with-us">
      <div className="why-work-container">
        <motion.div
          className="why-work-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="why-work-eyebrow">
            WHY WORK WITH US
          </span>

          <h2>
            Your Campaign, <span>Handled.</span>
          </h2>

          <p>
            We focus on the details that keep your music campaign
            organized, relevant and on track.
          </p>
        </motion.div>

        <div className="why-work-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                className="why-work-card"
                key={feature.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <div className="why-work-card-top">
                  <span className="why-work-number">
                    {feature.number}
                  </span>

                  <div className="why-work-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
