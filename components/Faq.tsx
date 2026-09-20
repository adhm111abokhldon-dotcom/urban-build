import Pretitle from "./Pretitle";
import { motion } from "motion/react";
import { fadeIn } from "@/variant";
import FaqItem from "./ui/FaqItem";

const faqItemsData = [
  {
    title: "How long does construction project usually take?",
    description: "TimeLines  very based on project size and complexity.",
  },
  {
    title: "Do I need permits for my project?",
    description:
      "Yes, most construction projects require permits. We can help you identify and handle the necessary approvals.",
  },
  {
    title: "What materials do you use?",
    description:
      "We use high-quality, durable materials selected to meet project requirements, design standards, and safety regulations.",
  },
  {
    title: "Can I make changes after construction starts?",
    description:
      "Yes, changes are possible, but they may affect the timeline and project cost..",
  },
  {
    title: "How much will my construction project cost?",
    description:
      "The cost depends on the project size, materials, design, and scope. We provide a clear estimate based on your specific needs.",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description:
      "We follow strict quality standards and safety procedures, with regular site inspections throughout the project.",
  },
];

// animation variants
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="custom-container">
        {/* text */}
        <div className="text-center max-w-135 mx-auto xl:mb-20">
          <Pretitle text="Faq" center={true} />
          <h2 className="mb-3">Got Questions We&apos;ve Got You Covered</h2>
          <p className="mb-11 max-w-120 mx-auto">
            From projext planning to final touches, we&apos;ve answerd the most
            common Questions to help you make informed decisions.
          </p>
        </div>
        {/* faq items */}
        <ul>
          {faqItemsData.map((item, index) => (
            <li key={index}>
              <FaqItem title={item.title} description={item.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
