import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const subjects = [
  "Software Engineering",
  "Data Structures & Algorithms",
  "Mobile Computing",
  "Database Systems",
  "Computer Networks",
  "Operating Systems",
  "Object-Oriented Programming",
  "Human-Computer Interaction",
];

const EducationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="sticky top-14 z-10 bg-background/80 backdrop-blur-md py-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gradient"
        >
          Education
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">Academic foundation and professional growth.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          boxShadow: "0 0 40px hsl(141 73% 42% / 0.08)",
        }}
        className="bg-card rounded-xl p-6 md:p-8 border border-border relative overflow-hidden group"
      >
        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 glow-primary"
          >
            <GraduationCap className="w-7 h-7 text-primary" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">The Chinese University of Hong Kong (CUHK)</h3>
            <p className="text-sm text-muted-foreground mt-1">Bachelor's Degree in Computer Science / Information Technology</p>

            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sha Tin, Hong Kong</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Graduated</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-semibold text-foreground">Key Areas of Study</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject, i) => (
                  <motion.span
                    key={subject}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.08, borderColor: "hsl(141, 73%, 42%)" }}
                    className="text-xs px-3 py-1.5 rounded-full bg-surface-highlight text-muted-foreground border border-border cursor-default transition-colors"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-semibold text-foreground">Campus Location</h4>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden border border-border shadow-lg"
              >
                <iframe
                  title="CUHK Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3!2d114.2068!3d22.4196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404089b0a8688e1%3A0x8b0e4a0d4b0d0e0!2sThe%20Chinese%20University%20of%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1700000000000!5m2!1sen!2shk"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
