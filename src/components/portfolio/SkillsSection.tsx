import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Cloud, TestTube, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Android (Java)", years: "12 years" },
      { name: "Android (Kotlin)", years: "10 years" },
      { name: "Jetpack Compose", years: "5 years" },
      { name: "iOS (Swift)", years: "5 years" },
      { name: "Flutter / Dart", years: "7 years" },
      { name: "React Native", years: "7 years" },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: [
      { name: "Java", years: "12 years" },
      { name: "Kotlin", years: "10 years" },
      { name: "TypeScript / JavaScript", years: "7 years" },
      { name: "Swift", years: "5 years" },
      { name: "Dart", years: "7 years" },
      { name: "Python", years: "5 years" },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: Database,
    skills: [
      { name: "MVVM / MVI", years: "8 years" },
      { name: "Clean Architecture", years: "8 years" },
      { name: "Repository Pattern", years: "8 years" },
      { name: "Dependency Injection", years: "7 years" },
      { name: "Coroutines & Flow", years: "7 years" },
      { name: "Room / SQLite", years: "8 years" },
    ],
  },
  {
    title: "Cloud & Backend",
    icon: Cloud,
    skills: [
      { name: "Firebase", years: "8 years" },
      { name: "REST APIs / Retrofit", years: "10 years" },
      { name: "GraphQL", years: "5 years" },
      { name: "Google Cloud Platform", years: "5 years" },
      { name: "CI/CD", years: "6 years" },
      { name: "App Store Publishing", years: "10 years" },
    ],
  },
  {
    title: "Testing & QA",
    icon: TestTube,
    skills: [
      { name: "JUnit / Espresso", years: "10 years" },
      { name: "Mockito / MockK", years: "8 years" },
      { name: "UI Testing (Compose)", years: "5 years" },
      { name: "Integration Testing", years: "7 years" },
      { name: "Crashlytics", years: "8 years" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Android Studio", years: "12 years" },
      { name: "Git / GitHub", years: "10 years" },
      { name: "Jira / Confluence", years: "8 years" },
      { name: "Figma", years: "5 years" },
      { name: "Postman", years: "7 years" },
      { name: "Charles Proxy", years: "6 years" },
    ],
  },
];

const SkillsSection = () => {
  const featuredCategories = skillCategories.filter(
    (cat) => cat.title === "Mobile Development" || cat.title === "Languages & Frameworks",
  );
  const otherCategories = skillCategories.filter(
    (cat) => cat.title !== "Mobile Development" && cat.title !== "Languages & Frameworks",
  );

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
          Technical Skills
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          Mobile-first expertise with deep Android and framework knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {featuredCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{
              y: -5,
              boxShadow: "0 0 35px hsl(141 73% 42% / 0.13)",
              borderColor: "hsl(141, 73%, 42%, 0.45)",
            }}
            className="rounded-2xl p-6 border border-primary/25 transition-colors relative overflow-hidden group stripe-bg-card bg-gradient-to-br from-primary/[0.07] via-background to-background"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-[radial-gradient(circle,hsl(141_73%_42%/0.09),transparent_70%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center"
                >
                  <cat.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-[10px] uppercase tracking-wider text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full"
              >
                Focus
              </motion.div>
            </div>

            <ul className="relative space-y-2.5">
              {cat.skills.map((skill, si) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + si * 0.03, duration: 0.3 }}
                  className="flex items-center justify-between text-sm group/item p-2 rounded-lg hover:bg-primary/[0.06] transition-colors duration-200"
                >
                  <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                    {skill.name}
                  </span>
                  {skill.years && (
                    <span className="text-[11px] text-primary tabular-nums font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                      {skill.years}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {otherCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{
              y: -3,
              boxShadow: "0 0 24px hsl(141 73% 42% / 0.08)",
              borderColor: "hsl(141, 73%, 42%, 0.28)",
            }}
            className="rounded-xl p-5 border border-border transition-colors relative overflow-hidden group stripe-bg-card"
          >
            <div className="relative flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground">{cat.title}</h3>
            </div>

            <ul className="relative space-y-2">
              {cat.skills.slice(0, 5).map((skill) => (
                <li key={skill.name} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span className="text-[11px] text-primary/80 tabular-nums font-medium bg-primary/5 px-2 py-0.5 rounded-full">
                    {skill.years}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
