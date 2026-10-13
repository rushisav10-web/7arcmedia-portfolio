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
    title: "Reliable Campaign Management",
    description:
      "We coordinate placements and review submitted content to help keep your campaign organized and on track.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Deadline-Focused Execution",
    description:
      "We coordinate campaign delivery around agreed timelines and keep you informed of progress.",
    icon: Clock3,
  },
  {
    number: "03",
    title: "Relevant Creators & Editors",
    description:
      "We work with creators and editors whose content fits your music, audience and campaign goals.",
    icon: Users,
  },
  {
    number: "04",
    title: "Accurate Sound Usage",
    description:
      "We check that campaign content uses your specified track or sound as required.",
    icon: Music2,
  },
  {
    number: "05",
    title: "Performance Tracking",
    description:
      "We track campaign results and provide a clear overview of content performance.",
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
            We manage the details behind your TikTok music campaign,
            so you can focus on your next release.
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