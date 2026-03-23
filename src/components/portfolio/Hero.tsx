import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Smartphone, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import profileImg from "@/assets/profile.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden stripe-bg">
      {/* Stripe-style color orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(280 60% 50% / 0.15) 0%, transparent 70%)",
            animation: "mesh-float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, hsl(200 70% 50% / 0.12) 0%, transparent 70%)",
            animation: "mesh-float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute -bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(141 73% 42% / 0.12) 0%, transparent 70%)",
            animation: "mesh-float 14s ease-in-out infinite 2s",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative px-6 pt-24 pb-10 md:px-10 md:pt-32 max-w-5xl mx-auto text-center"
      >
        {/* Profile image with glow ring */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-full opacity-60"
              style={{
                background: "linear-gradient(135deg, hsl(141 73% 42%), hsl(200 70% 50% / 0.3))",
                animation: "pulse-glow 3s ease-in-out infinite",
              }}
            />
            <img
              src={profileImg}
              alt={profile.name}
              className="relative w-28 h-28 md:w-40 md:h-40 rounded-full object-cover shadow-[0_8px_80px_rgba(0,0,0,.6)]"
            />
          </div>
        </motion.div>

        {/* Role badge */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
          <Smartphone className="w-4 h-4 text-primary" />
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Senior Mobile Developer
          </p>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-5 text-gradient">
            {profile.name}
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants}>
          <p
            className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed"
            style={{ textWrap: "pretty" as any }}
          >
            12 years building high-scale Android, iOS & Cross-platform apps.
            Trilingual engineer delivering robust mobile products for finance, media, and gaming.
          </p>
        </motion.div>

        {/* Figma design portfolio — gradient frame inspired by Figma brand colors */}
        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <motion.a
            href={profile.figmaPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.035, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group relative inline-flex rounded-full p-[1px] shadow-[0_0_48px_-10px_hsl(280_55%_45%/0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              background:
                "linear-gradient(120deg, #A259FF 0%, #F24E1E 45%, #0ACF83 85%, #1ABCFE 100%)",
            }}
            aria-label="Open Figma design portfolio in a new tab"
          >
            <span className="flex items-center gap-2.5 rounded-full bg-background/95 px-5 py-2.5 md:px-6 md:py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors group-hover:bg-background">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#2C2C2C] shadow-inner" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path fill="#0ACF83" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                  <path fill="#A259FF" d="M8 16h4V8H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                  <path fill="#F24E1E" d="M8 8h4V0H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                  <path fill="#FF7262" d="M16 8h4c0-2.208-1.792-4-4-4S12 5.792 12 8v4h4z" />
                  <path fill="#1ABCFE" d="M12 16h4c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v8z" />
                </svg>
              </span>
              <span className="tracking-tight">Figma portfolio</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
            </span>
          </motion.a>
        </motion.div>

        {/* Meta info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-8 mb-6"
        >
          {[
            { icon: MapPin, label: profile.location },
            { icon: GraduationCap, label: profile.university },
            { icon: Award, label: `${profile.certifications.length} Certifications` },
          ].map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, color: "hsl(141, 73%, 42%)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 transition-colors cursor-default"
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Language badges */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-10">
          {profile.languages.map((lang) => (
            <motion.span
              key={lang}
              whileHover={{ scale: 1.1, borderColor: "hsl(141, 73%, 42%)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-xs px-4 py-1.5 rounded-full bg-surface-highlight text-muted-foreground border border-border cursor-default btn-fluid"
            >
              {lang}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="flex items-baseline justify-center gap-10 md:gap-14">
          {[
            { value: profile.totalYears, label: "Years" },
            { value: 6, label: "Studios" },
            { value: `${profile.totalApps}+`, label: "Products" },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-default"
            >
              <span className="text-5xl md:text-7xl font-extrabold text-gradient tabular-nums">
                {value}
              </span>
              <span className="text-sm text-muted-foreground ml-2 uppercase tracking-wider">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
