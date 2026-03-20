import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, Smartphone, ChevronDown, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { studios } from "@/data/portfolio";
import { getScreenshots } from "@/data/appScreenshots";

// Sort: Unicorn first (2024-2025), then rest reversed (newest first)
const unicorn = studios.find((s) => s.id === "unicorn")!;
const rest = studios.filter((s) => s.id !== "unicorn").reverse();
const orderedStudios = [unicorn, ...rest];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const companyVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)", scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const AppCardHeader = ({ app }: { app: import("@/data/portfolio").AppItem }) => {
  const screenshots = getScreenshots(app.screenshots);
  const [currentIdx, setCurrentIdx] = useState(0);
  const appIcon = `https://play-lh.googleusercontent.com/icon?id=${app.playStoreId}`;

  if (screenshots.length > 0) {
    return (
      <div className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={screenshots[currentIdx]}
            alt={`${app.name} screenshot ${currentIdx + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Navigation dots & arrows */}
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2 z-10">
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIdx((p) => (p - 1 + screenshots.length) % screenshots.length); }}
            className="w-6 h-6 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
          >
            <ChevronLeft className="w-3 h-3 text-foreground" />
          </button>
          <div className="flex gap-1">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIdx(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIdx ? "bg-primary w-3" : "bg-foreground/30"}`}
              />
            ))}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIdx((p) => (p + 1) % screenshots.length); }}
            className="w-6 h-6 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
          >
            <ChevronRight className="w-3 h-3 text-foreground" />
          </button>
        </div>
        {/* Screenshot badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-background/60 backdrop-blur-sm text-[9px] text-foreground/70">
          <Images className="w-2.5 h-2.5" />
          {screenshots.length}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-36 bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(141_73%_42%/0.08),transparent_60%)]" />
      <motion.div
        className="w-16 h-16 rounded-2xl bg-card shadow-xl overflow-hidden border border-border/50"
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={appIcon}
          alt={app.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </motion.div>
      <div className="absolute bottom-2 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <Smartphone className="w-10 h-10 text-primary" />
      </div>
    </div>
  );
};

const TimelineWorkHistory = () => {
  return (
    <motion.section
      id="work-history"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="sticky top-14 z-10 bg-background/80 backdrop-blur-md py-4 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gradient"
        >
          Work History
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-1">
          6 studios · 12 years · 24+ published apps
        </p>
      </div>

      {/* Company branch overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="mb-16"
      >
        <div className="relative flex flex-col items-center">
          {/* Vertical trunk line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-border" />

          {orderedStudios.map((studio, i) => (
            <motion.div
              key={studio.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className={`relative flex items-center w-full max-w-xl mb-3 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Node */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_8px_hsl(141_73%_42%/0.4)]" />
              </div>

              {/* Branch line */}
              <div
                className={`absolute top-1/2 -translate-y-px h-px bg-primary/30 w-8 ${
                  i % 2 === 0 ? "right-[calc(50%+6px)]" : "left-[calc(50%+6px)]"
                }`}
              />

              {/* Company chip */}
              <div
                className={`${
                  i % 2 === 0 ? "mr-auto pr-4 text-right" : "ml-auto pl-4 text-left"
                } w-[calc(50%-24px)]`}
              >
                <a
                  href={`#company-${studio.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`company-${studio.id}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-xs font-medium text-foreground group cursor-pointer"
                >
                  <Building2 className="w-3 h-3 text-primary" />
                  <span className="truncate">{studio.name}</span>
                  <span className="text-muted-foreground text-[10px]">{studio.years}</span>
                </a>
              </div>
            </motion.div>
          ))}

          {/* Arrow at bottom */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-2"
          >
            <ChevronDown className="w-5 h-5 text-primary/40" />
          </motion.div>
        </div>
      </motion.div>

      {/* Detailed company sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="space-y-20"
      >
        {orderedStudios.map((studio) => (
          <motion.div key={studio.id} id={`company-${studio.id}`} variants={companyVariants}>
            {/* Company header */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileInView={{ x: [-20, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/5">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground">{studio.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{studio.years}</span>
                  <span className="text-primary font-semibold">· {studio.duration}</span>
                </div>
              </div>
            </motion.div>

            <p className="text-sm text-muted-foreground mb-6 max-w-2xl leading-relaxed" style={{ textWrap: "pretty" as any }}>
              {studio.description}
            </p>

            {/* Project cards - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {studio.apps.map((app, i) => {
                const appIcon = `https://play-lh.googleusercontent.com/icon?id=${app.playStoreId}`;
                return (
                  <motion.div
                    key={app.playStoreId}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      boxShadow: "0 20px 60px hsl(141 73% 42% / 0.12), 0 0 0 1px hsl(141 73% 42% / 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="bg-card rounded-xl border border-border overflow-hidden group relative flex flex-col"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <AppCardHeader app={app} />


                    <div className="p-4 flex-1 flex flex-col relative">
                      <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                        {app.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mb-3">{app.category}</p>

                      {app.tech && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {app.tech.split(" · ").map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-primary/5 text-primary/80 border border-primary/10 font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-2 border-t border-border/50">
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{studio.years}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TimelineWorkHistory;
