import { motion } from "framer-motion";
import { MapPin, Smartphone, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Work History", href: "#work-history" },
];

const stats = [
  { value: "12+", label: "Years" },
  { value: "6", label: "Studios" },
  { value: `${profile.totalApps}+`, label: "Apps shipped" },
  { value: "3", label: "Languages" },
];

const Footer = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden border-t border-border"
    >
      {/* Stripe-style gradient background */}
      <div className="absolute inset-0 stripe-bg opacity-60" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[radial-gradient(circle,hsl(141_73%_42%/0.04),transparent_70%)]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[radial-gradient(circle,hsl(200_60%_50%/0.03),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Stats bar */}
        <div className="py-8 grid grid-cols-4 gap-4 border-b border-border/40">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main footer content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-bold text-foreground tracking-tight">
              CHY<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs" style={{ textWrap: "pretty" as any }}>
              Senior Mobile Developer crafting high-quality Android & cross-platform apps for over a decade.
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 text-primary" />
              <span>Hong Kong</span>
              <span className="mx-1 text-border">·</span>
              <Smartphone className="w-3 h-3 text-primary" />
              <span>Mobile First</span>
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground/60 font-medium mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    whileHover={{ x: 4 }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} Chak Hin Yau. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground/60">
            <span>Designed & built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-primary text-sm"
            >
              ♥
            </motion.span>
            <span>in Hong Kong</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
