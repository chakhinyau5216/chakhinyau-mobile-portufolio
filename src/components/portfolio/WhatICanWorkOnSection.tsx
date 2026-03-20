import { motion } from "framer-motion";
import { AppWindow, Blocks, Bug, Gamepad2, Smartphone, Wrench } from "lucide-react";

const workAreas = [
  {
    title: "Android App Development",
    icon: Smartphone,
    description: "Build complete Android products from idea to Play Store release.",
    details: [
      "Native app development with Kotlin, Java, and Jetpack Compose",
      "Modern app architecture with MVVM, clean modules, and reusable components",
      "API integration, local database, authentication, notifications, and analytics",
    ],
  },
  {
    title: "Cross-platform Apps",
    icon: AppWindow,
    description: "Ship Android and iOS apps faster with shared codebases.",
    details: [
      "Flutter and React Native development for startup and enterprise products",
      "Platform-specific optimization where native features are required",
      "Consistent UI/UX and release pipeline for both app stores",
    ],
  },
  {
    title: "App Refactor & Optimization",
    icon: Wrench,
    description: "Improve app quality, speed, and code maintainability.",
    details: [
      "Refactor legacy code into scalable architecture and cleaner modules",
      "Performance tuning for startup time, rendering, memory, and battery use",
      "Stability hardening with better error handling and monitoring",
    ],
  },
  {
    title: "App Development Bug Fix",
    icon: Bug,
    description: "Fix critical production issues quickly and safely.",
    details: [
      "Crash analysis from logs, bug reports, and real device reproduction",
      "API, state-management, UI, and edge-case bug resolution",
      "Regression-safe fixes with validation before release",
    ],
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    description: "Develop and improve mobile game features and gameplay systems.",
    details: [
      "Feature implementation for casual, puzzle, and hyper-casual games",
      "Gameplay flow, reward system, and retention-oriented UX improvements",
      "Game service integration such as ads, in-app purchases, and analytics",
    ],
  },
  {
    title: "Architecture & Technical Planning",
    icon: Blocks,
    description: "Plan robust technical foundations before development starts.",
    details: [
      "Feature breakdown, module design, and sprint-ready technical roadmap",
      "Scalable architecture decisions for long-term product growth",
      "Engineering standards for code quality, testing, and team collaboration",
    ],
  },
  {
    title: "Maintenance & Feature Delivery",
    icon: AppWindow,
    description: "Provide long-term support after launch.",
    details: [
      "Continuous updates, feature expansion, and dependency upgrades",
      "QA coordination, release management, and store submission support",
      "Ongoing monitoring and iterative improvements based on user feedback",
    ],
  },
];

const WhatICanWorkOnSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gradient"
        >
          What I Can Work On
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          Detailed support across app development, bug fixing, game features, and long-term product growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workAreas.map((area, index) => (
          <motion.article
            key={area.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{
              y: -3,
              boxShadow: "0 0 28px hsl(141 73% 42% / 0.09)",
              borderColor: "hsl(141, 73%, 42%, 0.35)",
            }}
            className="rounded-xl p-5 border border-border stripe-bg-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <area.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground">{area.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {area.description}
            </p>
            <ul className="mt-3 space-y-1.5">
              {area.details.map((detail) => (
                <li key={detail} className="text-xs text-muted-foreground leading-relaxed">
                  - {detail}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatICanWorkOnSection;
