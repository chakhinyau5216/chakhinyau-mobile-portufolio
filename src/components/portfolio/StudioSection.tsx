import { motion } from "framer-motion";

import type { Studio } from "@/data/portfolio";
import AppCard from "./AppCard";

interface StudioSectionProps {
  studio: Studio;
}

const StudioSection = ({ studio }: StudioSectionProps) => {
  return (
    <motion.section
      id={studio.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-16"
    >
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 mb-5 text-center">
        <div className="flex items-baseline justify-center gap-3 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gradient"
          >
            {studio.name}
          </motion.h2>
        </div>
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="text-xs text-muted-foreground tabular-nums">{studio.years}</span>
          <span className="text-xs bg-primary/10 text-primary px-3 py-0.5 rounded-full font-medium">
            {studio.duration}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto" style={{ textWrap: 'pretty' as any }}>
          {studio.description}
        </p>
      </div>

      <div className="space-y-1 bg-card/50 rounded-xl p-2 border border-border">
        {studio.apps.map((app, i) => (
          <AppCard key={app.playStoreId} app={app} index={i} />
        ))}
      </div>
    </motion.section>
  );
};

export default StudioSection;
