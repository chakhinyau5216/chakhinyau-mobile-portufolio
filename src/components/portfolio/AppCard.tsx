import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { AppItem } from "@/data/portfolio";

interface AppCardProps {
  app: AppItem;
  index: number;
}

const AppCard = ({ app, index }: AppCardProps) => {
  const playStoreUrl = `https://play.google.com/store/apps/details?id=${app.playStoreId}`;
  const iconUrl = `https://play-lh.googleusercontent.com/icon?id=${app.playStoreId}`;

  return (
    <motion.a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.06,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ x: 4, backgroundColor: "hsla(0, 0%, 100%, 0.06)" }}
      className="group flex items-center gap-4 p-3 rounded-lg transition-colors duration-200"
    >
      <div className="relative h-12 w-12 shrink-0">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="h-12 w-12 rounded-xl bg-surface-highlight overflow-hidden shadow-lg"
        >
          <img
            src={iconUrl}
            alt={app.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl bg-primary/20 backdrop-blur-sm">
          <Play className="w-5 h-5 text-primary fill-primary" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-foreground font-medium text-sm truncate group-hover:text-primary transition-colors duration-200">
          {app.name}
        </h4>
        <p className="text-xs text-muted-foreground truncate">
          {app.category}{app.tech ? ` · ${app.tech}` : ""}
        </p>
      </div>

      <motion.span
        initial={{ opacity: 0, x: -5 }}
        whileHover={{ x: 3 }}
        className="text-xs text-primary font-medium tabular-nums opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        View →
      </motion.span>
    </motion.a>
  );
};

export default AppCard;
