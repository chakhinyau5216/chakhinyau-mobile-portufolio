import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, BadgeCheck } from "lucide-react";

const certifications = [
  {
    name: "Google Associate Android Developer",
    issuer: "Google",
    icon: ShieldCheck,
    description:
      "Validates proficiency in fundamental Android development skills including UI design, data management, debugging, and testing using Android Studio and Kotlin/Java.",
    highlights: [
      "Android UI design & user input handling",
      "Data management & lifecycle-aware components",
      "Debugging, testing & accessibility",
      "Core app architecture (Activities, Fragments, ViewModels)",
    ],
  },
  {
    name: "Google Certified App Developer",
    issuer: "Google",
    icon: BadgeCheck,
    description:
      "Advanced certification demonstrating expertise in building production-quality Android applications with modern architecture patterns, performance optimization, and Play Store best practices.",
    highlights: [
      "Advanced app architecture (MVVM, Clean Architecture)",
      "Performance optimization & memory management",
      "Security best practices & data encryption",
      "Play Store publishing & app distribution",
    ],
  },
];

const CertificationsSection = () => {
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
          Certifications
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          Industry-recognized credentials from Google.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 40px hsl(141 73% 42% / 0.1)",
              }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground leading-tight">{cert.name}</h3>
                  <p className="text-xs text-primary mt-0.5 font-medium">Issued by {cert.issuer}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed" style={{ textWrap: "pretty" as any }}>
                {cert.description}
              </p>

              <ul className="space-y-2.5">
                {cert.highlights.map((h, hi) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + hi * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
