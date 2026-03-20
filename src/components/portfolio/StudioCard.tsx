import { motion } from "framer-motion";
import type { Studio } from "@/data/portfolio";

interface StudioCardProps {
  studio: Studio;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const StudioCard = ({ studio, index }: StudioCardProps) => {
  const firstApp = studio.apps[0];
  const iconUrl = `https://play-lh.googleusercontent.com/icon?id=${firstApp.playStoreId}`;

  // Collect unique techs
  const techs = [...new Set(studio.apps.map((a) => a.tech).filter(Boolean))];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 40px hsla(141, 73%, 42%, 0.12)",
        borderColor: "hsl(141, 73%, 42%, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-card rounded-xl border border-border p-5 flex flex-col relative overflow-hidden group"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header: icon + studio name */}
      <div className="relative flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-surface-highlight overflow-hidden shadow-md shrink-0">
          <img
            src={iconUrl}
            alt={studio.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-foreground truncate">{studio.name}</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{studio.years}</p>
        </div>
        <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0">
          {studio.duration}
        </span>
      </div>

      {/* Description */}
      <p className="relative text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2" style={{ textWrap: "pretty" as any }}>
        {studio.description}
      </p>

      {/* Tech skills */}
      <div className="relative flex flex-wrap gap-1.5 mb-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 rounded-md bg-surface-highlight text-muted-foreground border border-border/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Apps list */}
      <div className="relative mt-auto space-y-1.5">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-medium mb-1">
          {studio.apps.length} Apps
        </p>
        {studio.apps.map((app) => {
          const appIcon = `https://play-lh.googleusercontent.com/icon?id=${app.playStoreId}`;
          return (
            <div
              key={app.playStoreId}
              className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-surface-highlight transition-colors group/app"
            >
              <div className="w-7 h-7 rounded-lg bg-surface-highlight overflow-hidden shrink-0">
                <img
                  src={appIcon}
                  alt={app.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-foreground truncate group-hover/app:text-primary transition-colors">
                  {app.name}
                </p>
                <p className="text-[10px] text-muted-foreground truncate">{app.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StudioCard;
