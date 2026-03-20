import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, Smartphone, ChevronDown, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { studios } from "@/data/portfolio";
import { getScreenshots } from "@/data/appScreenshots";

// Order matches `studios` in portfolio: (1) Unicorn → (2) HKTDC → (3) Joynow → …
const orderedStudios = studios;

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

const screenshotGridClass = (n: number) => {
  if (n <= 1) return "grid-cols-1";
  if (n === 2) return "grid-cols-2";
  if (n === 3) return "grid-cols-3";
  if (n === 4) return "grid-cols-2 grid-rows-2";
  return "grid-cols-3 auto-rows-fr"; /* 5+ images: 3 columns, wrap */
};

const AppCardHeader = ({ app }: { app: import("@/data/portfolio").AppItem }) => {
  const screenshots = getScreenshots(app.screenshots);
  const appIcon = `https://play-lh.googleusercontent.com/icon?id=${app.playStoreId}`;

  if (screenshots.length > 0) {
    const n = screenshots.length;
    const many = n > 4;
    return (
      <div
        className={`relative bg-gradient-to-br from-secondary to-muted overflow-hidden ${
          many ? "min-h-52 max-h-64 overflow-y-auto" : "h-48"
        }`}
      >
        <div
          className={`grid w-full gap-0.5 ${screenshotGridClass(n)} ${
            many ? "min-h-full" : "h-full"
          }`}
        >
          {screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${app.name} screenshot ${idx + 1}`}
              className="w-full h-full min-h-0 object-cover"
            />
          ))}
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-background/60 backdrop-blur-sm text-[9px] text-foreground/70 pointer-events-none">
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
  const [selectedApp, setSelectedApp] = useState<{
    name: string;
    screenshots: string[];
    technicalNote?: string;
  } | null>(null);
  const [modalIdx, setModalIdx] = useState(0);

  useEffect(() => {
    if (!selectedApp) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedApp(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        setModalIdx((prev) => (prev - 1 + selectedApp.screenshots.length) % selectedApp.screenshots.length);
      }

      if (event.key === "ArrowRight") {
        setModalIdx((prev) => (prev + 1) % selectedApp.screenshots.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedApp]);

  return (
    <>
      <motion.section
        id="work-history"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08, margin: "0px 0px 25% 0px" }}
        transition={{ duration: 0.45 }}
        className="mb-16 scroll-mt-24"
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
          6 studios · 12 years · 23+ published apps
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

      {/* Detailed company sections — animate each block independently so content never stays opacity:0 if parent whileInView misses */}
      <div className="space-y-20">
        {orderedStudios.map((studio) => (
          <motion.div
            key={studio.id}
            id={`company-${studio.id}`}
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08, margin: "0px 0px 15% 0px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
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
                const screenshots = getScreenshots(app.screenshots);
                const canPreview = screenshots.length > 0;
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
                    className={`bg-card rounded-xl border border-border overflow-hidden group relative flex flex-col ${
                      canPreview ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      if (!canPreview) return;
                      setSelectedApp({ name: app.name, screenshots, technicalNote: app.technicalNote });
                      setModalIdx(0);
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <AppCardHeader app={app} />


                    <div className="p-4 flex-1 flex flex-col relative">
                      <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                        {app.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mb-2">{app.category}</p>
                      {app.technicalNote && (
                        <p className="text-[11px] text-muted-foreground/90 leading-snug mb-3 line-clamp-4">
                          {app.technicalNote}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-1 mb-3">
                        {app.skills.slice(0, 5).map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-primary/5 text-primary/80 border border-primary/10 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

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
      </div>
      </motion.section>

      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedApp(null)}
          >
            <div className="h-full w-full flex items-center justify-center">
              <motion.div
                className="relative w-full max-w-5xl"
                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 10, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 text-white/90 hover:text-white text-sm"
                  onClick={() => setSelectedApp(null)}
                >
                  Close
                </button>

                <div className="relative rounded-xl overflow-hidden border border-white/20 bg-black">
                  <img
                    src={selectedApp.screenshots[modalIdx]}
                    alt={`${selectedApp.name} preview ${modalIdx + 1}`}
                    className="w-full max-h-[min(70vh,720px)] object-contain mx-auto"
                  />
                  {selectedApp.screenshots.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center z-10"
                        onClick={() =>
                          setModalIdx((prev) => (prev - 1 + selectedApp.screenshots.length) % selectedApp.screenshots.length)
                        }
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center z-10"
                        onClick={() => setModalIdx((prev) => (prev + 1) % selectedApp.screenshots.length)}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-2 text-center space-y-2">
                  <p className="text-xs text-white/70">
                    {modalIdx + 1} / {selectedApp.screenshots.length}
                  </p>
                  {selectedApp.technicalNote && (
                    <p className="text-xs text-white/60 max-w-2xl mx-auto leading-relaxed text-left px-1">
                      <span className="text-white/40 font-medium uppercase tracking-wide text-[10px] block mb-1">
                        Technical
                      </span>
                      {selectedApp.technicalNote}
                    </p>
                  )}
                </div>

                {/* All screenshots visible: scrollable thumbnail strip */}
                <div className="mt-3 max-w-full overflow-x-auto pb-1">
                  <div className="flex gap-2 min-w-0 justify-center flex-wrap sm:flex-nowrap sm:justify-start">
                    {selectedApp.screenshots.map((src, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setModalIdx(idx)}
                        className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all w-20 h-20 sm:w-24 sm:h-24 ${
                          idx === modalIdx ? "border-primary ring-2 ring-primary/40" : "border-white/20 opacity-80 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TimelineWorkHistory;
